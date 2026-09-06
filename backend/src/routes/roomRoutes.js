const express = require("express");


const {
  createRoom,
  joinRoom,
  getRoom,
  saveCode,
  getRecentRooms,
} = require("../controllers/roomController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/", protect, createRoom);

router.post("/join", protect, joinRoom);

router.get(
  "/recent",
  protect,
  getRecentRooms
);

router.get(
  "/:roomCode",
  protect,
  getRoom
);

router.put(
  "/:roomCode/code",
  protect,
  saveCode
);

module.exports = router