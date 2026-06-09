function RoomHeader() {
  return (
    <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-xl">
          CodeSync Room
        </h1>

        <p className="text-zinc-400 text-sm">
          Room ID: ABC123
        </p>
      </div>

      <button className="bg-red-600 px-4 py-2 rounded-lg">
        Leave Room
      </button>
    </div>
  );
}

export default RoomHeader;