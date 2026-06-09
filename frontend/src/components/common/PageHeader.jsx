function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="mt-4 text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

export default PageHeader;