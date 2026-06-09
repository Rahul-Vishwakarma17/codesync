import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;