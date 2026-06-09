import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

import socket from "../../services/socket";

import {
  getRoom,
  saveRoomCode,
} from "../../services/roomService";

function CodeEditor() {
  const { roomId } = useParams();

  const [language, setLanguage] =
    useState("javascript");

  const [code, setCode] = useState(
`function hello() {
  console.log("Welcome to CodeSync 🚀");
}`
  );

  // Load saved code from MongoDB
  useEffect(() => {
    const fetchRoomCode = async () => {
      try {
        const response =
          await getRoom(roomId);

        if (
          response.data.currentCode
        ) {
          setCode(
            response.data.currentCode
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoomCode();
  }, [roomId]);

  // Receive code updates from other users
  useEffect(() => {
    socket.on(
      "receive-code-change",
      (newCode) => {
        setCode(newCode);
      }
    );

    return () => {
      socket.off(
        "receive-code-change"
      );
    };
  }, []);

  const handleCodeChange = async (
    value
  ) => {
    const updatedCode =
      value || "";

    setCode(updatedCode);

    // Real-time sync
    socket.emit("code-change", {
      roomCode: roomId,
      code: updatedCode,
    });

    // Save to MongoDB
    try {
      await saveRoomCode(
        roomId,
        updatedCode
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[500px] bg-zinc-900 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-3 border-b border-zinc-800">
        <h2 className="font-semibold">
          Code Editor
        </h2>

        <select
          value={language}
          onChange={(e) =>
            setLanguage(
              e.target.value
            )
          }
          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-1"
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

      <Editor
        height="450px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange}
      />
    </div>
  );
}

export default CodeEditor;