function FoodCard({ item }) {
  const { name, price, description, image } = item;

  return (
    <div className="border-stone-800 hover:border-orange-500 duration-300 border bg-[#020617] rounded-lg p-3">
      <img
        className="h-[255px] md:h-[600px] w-full lg:h-[210px] xl:h-[280px] "
        src={image}
        alt=""
      />
      <div className="flex justify-between mt-10">
        <h3 className="text-white text-xl tracking-wide font-bold">{name}</h3>
        <p className="text-amber-500 font-medium">${price}</p>
      </div>
      <p className="text-[#64748b] mt-5">{description}</p>
    </div>
  );
}

export default FoodCard;
