function Card({ header, titel, img }) {
  return (
    <div className="border-stone-800 hover:border-orange-500 duration-300 border bg-[#020617] rounded-lg p-7 space-y-6">
      <img src={img} alt="" />
      <h3 className="text-white text-xl sp tracking-wide">{header}</h3>
      <p className="text-[#64748b]">{titel}</p>
    </div>
  );
}

export default Card;
