function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-zinc-300">
          {label}
        </label>
      )}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default Input;