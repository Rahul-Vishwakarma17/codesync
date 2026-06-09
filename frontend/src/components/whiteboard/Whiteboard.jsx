import { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

function Whiteboard() {
  const canvasRef = useRef(null);

  const clearCanvas = async () => {
    await canvasRef.current.clearCanvas();
  };

  const undo = async () => {
    await canvasRef.current.undo();
  };

  const redo = async () => {
    await canvasRef.current.redo();
  };

  return (
    <div className="bg-zinc-900 rounded-xl p-4 h-[500px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">
          Whiteboard 🖍️
        </h2>

        <div className="flex gap-2">
          <button
            onClick={undo}
            className="bg-zinc-700 px-3 py-1 rounded"
          >
            Undo
          </button>

          <button
            onClick={redo}
            className="bg-zinc-700 px-3 py-1 rounded"
          >
            Redo
          </button>

          <button
            onClick={clearCanvas}
            className="bg-red-600 px-3 py-1 rounded"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <ReactSketchCanvas
          ref={canvasRef}
          strokeWidth={4}
          strokeColor="black"
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
}

export default Whiteboard;