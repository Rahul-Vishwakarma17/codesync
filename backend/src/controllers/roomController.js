const Room = require("../models/Room");
const generateRoomCode = require("../utils/generateRoomCode");

const createRoom = async (req, res) => {
  try {
    const { roomName, language } = req.body;

    const room = await Room.create({
      roomName,
      language,
      roomCode: generateRoomCode(),
      owner: req.user._id,
      participants: [req.user._id],
    });

    res.status(201).json({
      success: true,
      message: "Room created successfully",
      data: room,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const joinRoom = async (req, res) => {
  try {
    const { roomCode } = req.body;

    const room = await Room.findOne({
      roomCode,
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    if (
      !room.participants.includes(req.user._id)
    ) {
      room.participants.push(req.user._id);
      await room.save();
    }

    res.status(200).json({
      success: true,
      message: "Joined room successfully",
      data: room,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getRoom = async (req, res) => {
  try {
    const { roomCode } = req.params;

    const room = await Room.findOne({
      roomCode,
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      data: room,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const saveCode = async (req, res) => {
  try {
    const { roomCode } = req.params;
    const { code } = req.body;

    const room = await Room.findOneAndUpdate(
      { roomCode },
      { currentCode: code },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: room,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getRecentRooms = async (req, res) => {
  try {
    const rooms = await Room.find({
      participants: req.user._id,
    })
      .sort({ updatedAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      data: rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



module.exports = {
  createRoom,
  joinRoom,
  getRoom,
  saveCode,
  getRecentRooms,
};