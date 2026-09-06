
const activeRooms = {};
const roomUsers = {};

const broadcastParticipants = (io, roomCode) => {
  if (!activeRooms[roomCode]) return;

  const users = roomUsers[roomCode] || [];

  // Show each user only once
  const uniqueUsers = [];

  users.forEach((user) => {
    const alreadyExists = uniqueUsers.some(
      (existingUser) =>
        existingUser.userId === user.userId
    );

    if (!alreadyExists) {
      uniqueUsers.push(user);
    }
  });

  io.to(roomCode).emit(
    "participants-update",
    {
      count: uniqueUsers.length,
      users: uniqueUsers,
    }
  );
};

const removeSocketFromRoom = (
  io,
  socket,
  roomCode
) => {

  if (!activeRooms[roomCode]) return;

  activeRooms[roomCode].delete(
    socket.id
  );

  if (roomUsers[roomCode]) {
    roomUsers[roomCode] =
      roomUsers[roomCode].filter(
        (user) =>
          user.socketId !== socket.id
      );
  }

  broadcastParticipants(
    io,
    roomCode
  );

  if (
    activeRooms[roomCode].size === 0
  ) {
    delete activeRooms[roomCode];
    delete roomUsers[roomCode];
  }
};

const socketHandler = (io) => {
  io.on("connection", (socket) => {

    // Join Room
    socket.on("join-room", (data) => {
      const { roomCode, user } = data;

      socket.join(roomCode);

      if (!activeRooms[roomCode]) {
        activeRooms[roomCode] = new Set();
      }

      if (!roomUsers[roomCode]) {
        roomUsers[roomCode] = [];
      }

      activeRooms[roomCode].add(
        socket.id
      );

      // Remove an older socket entry
      // for the same user in this room
      roomUsers[roomCode] =
        roomUsers[roomCode].filter(
          (existingUser) =>
            existingUser.userId !==
            user.id
        );

      roomUsers[roomCode].push({
        socketId: socket.id,
        userId: user.id,
        name: user.name,
      });

      broadcastParticipants(
        io,
        roomCode
      );
    });

    // Leave Room
    socket.on("leave-room", (roomCode) => {

      if (!roomCode) return;

      socket.leave(roomCode);

      removeSocketFromRoom(
        io,
        socket,
        roomCode
      );
    });

    // Chat Messages
    socket.on("send-message", (data) => {
      io.to(data.roomCode).emit(
        "receive-message",
        data
      );
    });

    // Real-Time Code Sync
    socket.on("code-change", (data) => {
      socket
        .to(data.roomCode)
        .emit(
          "receive-code-change",
          data.code
        );
    });

    // Disconnect
    socket.on("disconnect", () => {
      Object.keys(activeRooms).forEach(
        (roomCode) => {
          if (
            activeRooms[roomCode]?.has(
              socket.id
            )
          ) {
            removeSocketFromRoom(
              io,
              socket,
              roomCode
            );
          }
        }
      );
    });
  });
};

module.exports = socketHandler;