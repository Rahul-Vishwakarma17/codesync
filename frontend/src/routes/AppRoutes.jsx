import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import CreateRoom from "../pages/CreateRoom";
import JoinRoom from "../pages/JoinRoom";
import RoomPage from "../pages/RoomPage";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-room"
          element={
            <ProtectedRoute>
              <CreateRoom />
            </ProtectedRoute>
          }
        />

        <Route
          path="/join-room"
          element={
            <ProtectedRoute>
              <JoinRoom />
            </ProtectedRoute>
          }
        />

        <Route
          path="/room/:roomId"
          element={
            <ProtectedRoute>
              <RoomPage />
            </ProtectedRoute>
          }
        />
      </Route>

    </Routes>
  );
}

export default AppRoutes; 