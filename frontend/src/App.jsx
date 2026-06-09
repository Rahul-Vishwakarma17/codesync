import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import socket from "./services/socket";

function App() {
  console.log("Socket ID:", socket.id);
  return (
    <div className="min-h-screen bg-black text-white">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;   