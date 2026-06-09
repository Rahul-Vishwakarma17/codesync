function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="text-zinc-400 mt-2 mb-6">
        {subtitle}
      </p>

      {children}
    </div>
  );
}

export default AuthCard;