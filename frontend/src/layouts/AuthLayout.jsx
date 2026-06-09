import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <Outlet />
    </div>
  );
}

export default AuthLayout;