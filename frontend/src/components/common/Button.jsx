function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;