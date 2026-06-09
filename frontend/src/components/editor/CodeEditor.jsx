import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

import socket from "../../services/socket";

import {
  getRoom,
  saveRoomCode,
  executeCode,
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

  const [output, setOutput] =
    useState("");

  const [running, setRunning] =
    useState(false);

  // Load saved code
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

  // Receive code updates
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

    socket.emit("code-change", {
      roomCode: roomId,
      code: updatedCode,
    });

    try {
      await saveRoomCode(
        roomId,
        updatedCode
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleRunCode =
    async () => {
      try {
        if (
          language !== "javascript"
        ) {
          setOutput(
            `${language} execution coming soon 🚀`
          );
          return;
        }

        setRunning(true);

        const response =
          await executeCode(code);

        setOutput(
          response.output
        );
      } catch (error) {
        setOutput(
          "Execution Failed"
        );
      } finally {
        setRunning(false);
      }
    };

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-3 border-b border-zinc-800">
        <h2 className="font-semibold">
          Code Editor
        </h2>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRunCode}
            disabled={running}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
          >
            {running
              ? "Running..."
              : "▶ Run"}
          </button>

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
      </div>

      <Editor
        height="500px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange}
      />

      <div className="border-t border-zinc-800 p-4">
        <h3 className="font-semibold mb-2">
          Output
        </h3>

        <pre className="bg-black rounded p-3 text-green-400 overflow-x-auto min-h-[100px] whitespace-pre-wrap">
          {output ||
            "Run code to see output..."}
        </pre>
      </div>
    </div>
  );
}

export default CodeEditor;