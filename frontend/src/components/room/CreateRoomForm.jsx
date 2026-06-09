import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";
import Card from "../common/Card";

import { createRoom } from "../../services/roomService";

function CreateRoomForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roomName: "",
    language: "javascript",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createRoom(formData);

      alert("Room created successfully!");

      navigate(
        `/room/${response.data.roomCode}`
      );

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to create room"
      );
    }
  };

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Create Room 🚀
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          label="Room Name"
          name="roomName"
          placeholder="Enter room name"
          value={formData.roomName}
          onChange={handleChange}
        />

        <div>
          <label className="block mb-2 text-sm text-zinc-300">
            Programming Language
          </label>

          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
          >
            <option value="javascript">
              JavaScript
            </option>

            <option value="python">
              Python
            </option>

            <option value="java">
              Java
            </option>

            <option value="cpp">
              C++
            </option>
          </select>
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Create Room
        </Button>
      </form>
    </Card>
  );
}

export default CreateRoomForm;