const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const codeRoutes = require("./routes/codeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/code", codeRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CodeSync API Running 🚀",
  });
});

module.exports = app;