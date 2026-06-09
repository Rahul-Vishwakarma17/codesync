// const activeRooms = {};

// const socketHandler = (io) => {
//   io.on("connection", (socket) => {
//     console.log(`User Connected: ${socket.id}`);

//     // Join Room
//     socket.on("join-room", (roomCode) => {
//       socket.join(roomCode);

//       if (!activeRooms[roomCode]) {
//         activeRooms[roomCode] = new Set();
//       }

//       activeRooms[roomCode].add(socket.id);

//       io.to(roomCode).emit(
//         "participants-update",
//         activeRooms[roomCode].size
//       );

//       console.log(
//         `${socket.id} joined room ${roomCode}`
//       );
//     });

//     // Chat Messages
//     socket.on("send-message", (data) => {
//       io.to(data.roomCode).emit(
//         "receive-message",
//         data
//       );
//     });

//     // Real-Time Code Sync
//     socket.on("code-change", (data) => {
//       socket
//         .to(data.roomCode)
//         .emit(
//           "receive-code-change",
//           data.code
//         );
//     });

//     // Disconnect
//     socket.on("disconnect", () => {
//       Object.keys(activeRooms).forEach(
//         (roomCode) => {
//           if (activeRooms[roomCode]) {
//             activeRooms[roomCode].delete(
//               socket.id
//             );

//             io.to(roomCode).emit(
//               "participants-update",
//               activeRooms[roomCode].size
//             );

//             if (
//               activeRooms[roomCode].size === 0
//             ) {
//               delete activeRooms[roomCode];
//             }
//           }
//         }
//       );

//       console.log(
//         `User Disconnected: ${socket.id}`
//       );
//     });
//   });
// };

// module.exports = socketHandler;

const activeRooms = {};
const roomUsers = {};

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

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

      activeRooms[roomCode].add(socket.id);

      roomUsers[roomCode].push({
        socketId: socket.id,
        name: user.name,
      });

      io.to(roomCode).emit(
        "participants-update",
        {
          count: activeRooms[roomCode].size,
          users: roomUsers[roomCode],
        }
      );

      console.log(
        `${user.name} joined room ${roomCode}`
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
          if (activeRooms[roomCode]) {
            activeRooms[roomCode].delete(
              socket.id
            );

            if (roomUsers[roomCode]) {
              roomUsers[roomCode] =
                roomUsers[roomCode].filter(
                  (user) =>
                    user.socketId !==
                    socket.id
                );
            }

            io.to(roomCode).emit(
              "participants-update",
              {
                count:
                  activeRooms[roomCode]
                    .size,
                users:
                  roomUsers[roomCode] ||
                  [],
              }
            );

            if (
              activeRooms[roomCode].size ===
              0
            ) {
              delete activeRooms[roomCode];
              delete roomUsers[roomCode];
            }
          }
        }
      );

      console.log(
        `User Disconnected: ${socket.id}`
      );
    });
  });
};

module.exports = socketHandler;