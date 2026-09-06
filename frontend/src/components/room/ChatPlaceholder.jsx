// import { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";

// import Card from "../common/Card";
// import socket from "../../services/socket";

// function ChatPlaceholder() {
//   const { roomId } = useParams();

//   const [message, setMessage] =
//     useState("");

//   const [messages, setMessages] =
//     useState([]);

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     socket.on(
//       "receive-message",
//       (newMessage) => {
//         setMessages((prev) => [
//           ...prev,
//           newMessage,
//         ]);
//       }
//     );

//     return () => {
//       socket.off("receive-message");
//     };
//   }, []);

//   // Auto Scroll
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages]);

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     const user = JSON.parse(
//       localStorage.getItem("user")
//     );

//     const messageData = {
//       roomCode: roomId,
//       text: message,
//       sender: user.name,
//       timestamp:
//         new Date().toLocaleTimeString(),
//     };

//     socket.emit(
//       "send-message",
//       messageData
//     );

//     setMessage("");
//   };

//   return (
//     <Card className="h-[500px] flex flex-col">
//       <h2 className="font-bold mb-4">
//         Team Chat 💬
//       </h2>

//       <div className="flex-1 overflow-y-auto space-y-3 pr-2">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className="bg-zinc-800 rounded-lg p-3"
//           >
//             <div className="flex justify-between mb-1">
//               <span className="font-semibold text-blue-400">
//                 {msg.sender}
//               </span>

//               <span className="text-xs text-zinc-500">
//                 {msg.timestamp}
//               </span>
//             </div>

//             <p className="text-zinc-200">
//               {msg.text}
//             </p>
//           </div>
//         ))}

//         <div ref={messagesEndRef} />
//       </div>

//      <div className="mt-4 flex items-center gap-2 w-full">
//   <input
//     value={message}
//     onChange={(e) =>
//       setMessage(e.target.value)
//     }
//     onKeyDown={(e) => {
//       if (e.key === "Enter") {
//         sendMessage();
//       }
//     }}
//     placeholder="Type a message..."
//     className="flex-1 min-w-0 bg-zinc-800 border border-zinc-700 rounded px-3 py-2"
//   />

//   <button
//     onClick={sendMessage}
//     className="shrink-0 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded"
//   >
//     Send
//   </button>
// </div>
//     </Card>
//   );
// }

// export default ChatPlaceholder;

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Card from "../common/Card";
import socket from "../../services/socket";

function ChatPlaceholder() {
  const { roomId } = useParams();

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on(
      "receive-message",
      (newMessage) => {
        setMessages((prev) => [
          ...prev,
          newMessage,
        ]);
      }
    );

    return () => {
      socket.off("receive-message");
    };
  }, []);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const messageData = {
      roomCode: roomId,
      text: message,
      sender: user.name,
      timestamp:
        new Date().toLocaleTimeString(),
    };

    socket.emit(
      "send-message",
      messageData
    );

    setMessage("");
  };

  return (
    <Card className="h-[500px] flex flex-col min-w-0 overflow-hidden">
      <h2 className="font-bold mb-4">
        Team Chat 💬
      </h2>

      <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden space-y-3 pr-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-lg p-3 min-w-0"
          >
            <div className="flex justify-between gap-2 mb-1 min-w-0">
              <span className="font-semibold text-blue-400 break-words min-w-0">
                {msg.sender}
              </span>

              <span className="text-xs text-zinc-500 shrink-0">
                {msg.timestamp}
              </span>
            </div>

            <p className="text-zinc-200 break-words">
              {msg.text}
            </p>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex items-center gap-2 w-full min-w-0">
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type a message..."
          className="flex-1 min-w-0 bg-zinc-800 border border-zinc-700 rounded px-3 py-2"
        />

        <button
          onClick={sendMessage}
          className="shrink-0 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </Card>
  );
}

export default ChatPlaceholder;