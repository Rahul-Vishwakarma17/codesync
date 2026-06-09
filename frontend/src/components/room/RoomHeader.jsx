import { useNavigate, useParams } from "react-router-dom";

function RoomHeader() {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const handleLeaveRoom = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-xl">
          CodeSync Room
        </h1>

        <p className="text-zinc-400 text-sm">
          Room ID: {roomId}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleLeaveRoom}
          className="bg-zinc-700 hover:bg-zinc-600 transition px-4 py-2 rounded-lg"
        >
          Leave Room
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default RoomHeader;