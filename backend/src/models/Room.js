const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomCode: {
      type: String,
      required: true,
      unique: true,
    },

    roomName: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      default: "javascript",
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    currentCode: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);