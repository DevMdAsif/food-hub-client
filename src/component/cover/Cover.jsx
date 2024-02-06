function Cover({ header, title }) {
  return (
    <div className="space-y-4">
      <h3 className="text-white text-2xl font-bold uppercase">{header}</h3>
      <h4 className="text-[#75758c] max-w-[300px]">{title}</h4>
    </div>
  );
}

export default Cover;
