import { Link, useNavigate } from "react-router-dom";

import Logo from "./Logo";

function Navbar() {
  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        <div className="flex gap-3">
          {!token ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;