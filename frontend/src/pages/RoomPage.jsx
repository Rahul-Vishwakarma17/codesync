import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../components/common/Container";

import RoomHeader from "../components/room/RoomHeader";
import ParticipantsPanel from "../components/room/ParticipantsPanel";
import ChatPlaceholder from "../components/room/ChatPlaceholder";
import WhiteboardPlaceholder from "../components/room/WhiteboardPlaceholder";
import Whiteboard from "../components/whiteboard/Whiteboard";

import CodeEditor from "../components/editor/CodeEditor";

import socket from "../services/socket";
import { getRoom } from "../services/roomService";

function RoomPage() {
  const { roomId } = useParams();

  const [participants, setParticipants] =
    useState(0);

  const [roomExists, setRoomExists] =
    useState(null);

  useEffect(() => {
    const checkRoom = async () => {
      try {
        await getRoom(roomId);

        setRoomExists(true);
      } catch (error) {
        setRoomExists(false);
      }
    };

    checkRoom();
  }, [roomId]);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!roomExists) return;

    socket.emit("join-room", {
      roomCode: roomId,
      user,
    });

    socket.on(
      "participants-update",
      (data) => {
        setParticipants(data.count);
      }
    );

    return () => {
      socket.off(
        "participants-update"
      );
    };
  }, [roomId, roomExists]);

  if (roomExists === null) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  if (roomExists === false) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">
          Room Not Found ❌
        </h1>

        <p className="text-zinc-400 mb-6">
          This room does not exist.
        </p>

        <a
          href="/dashboard"
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Back To Dashboard
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <RoomHeader />

      <Container>
        <div className="py-6">
          <div className="mb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-bold">
                Room Code: {roomId}
              </h2>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    roomId
                  );

                  alert(
                    "Room code copied!"
                  );
                }}
                className="bg-blue-600 hover:bg-blue-700 transition px-3 py-1 rounded text-sm"
              >
                Copy Code
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    window.location.href
                  );

                  alert(
                    "Invite link copied!"
                  );
                }}
                className="bg-green-600 hover:bg-green-700 transition px-3 py-1 rounded text-sm"
              >
                Copy Link
              </button>
            </div>

            <p className="text-zinc-400 mt-2">
              👥 Participants Online: {participants}
              
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-4">
              <CodeEditor />
            </div>

            <div>
              <ChatPlaceholder />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <ParticipantsPanel />

            <Whiteboard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RoomPage;