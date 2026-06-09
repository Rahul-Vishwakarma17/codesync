import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";
import Card from "../common/Card";

import { joinRoom } from "../../services/roomService";

function JoinRoomForm() {
  const navigate = useNavigate();

  const [roomCode, setRoomCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await joinRoom(roomCode);

      alert("Joined room successfully!");

      navigate(
        `/room/${response.data.roomCode}`
      );

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to join room"
      );
    }
  };

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Join Room 🔗
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          label="Room Code"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) =>
            setRoomCode(e.target.value)
          }
        />

        <Button
          type="submit"
          className="w-full"
        >
          Join Room
        </Button>
      </form>
    </Card>
  );
}

export default JoinRoomForm;