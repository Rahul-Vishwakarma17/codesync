import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../common/Card";

import {
  getRecentRooms,
} from "../../services/roomService";

function RecentRooms() {
  const navigate = useNavigate();

  const [rooms, setRooms] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response =
          await getRecentRooms();

        setRooms(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">
        Recent Rooms
      </h2>

      {loading ? (
        <p className="text-zinc-400">
          Loading rooms...
        </p>
      ) : rooms.length === 0 ? (
        <p className="text-zinc-400">
          No recent rooms yet.
        </p>
      ) : (
        <div className="space-y-3">
          {rooms.map((room) => (
            <div
              key={room._id}
              onClick={() =>
                navigate(
                  `/room/${room.roomCode}`
                )
              }
              className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition rounded-lg p-4"
            >
              <h3 className="font-semibold">
                {room.roomName}
              </h3>

              <p className="text-sm text-zinc-400">
                Room Code:{" "}
                {room.roomCode}
              </p>

              <p className="text-sm text-zinc-500">
                Language:{" "}
                {room.language}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default RecentRooms;