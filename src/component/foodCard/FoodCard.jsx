import { BsHandbag } from "react-icons/bs";
import { BsArrowUpRightCircle } from "react-icons/bs";

function FoodCard({ item, menu }) {
  const { name, price, description, image } = item;

  return (
    <div
      className={`border border-stone-800 relative group hover:border-orange-500 transition duration-300 bg-[#020617] rounded-lg p-3 ${
        menu ? "pb-16" : ""
      }`}
    >
      <img
        className="h-[255px] w-full lg:h-[210px] object-cover rounded-md"
        src={image}
        alt={name}
      />
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-white text-2xl tracking-wide font-bold">{name}</h3>
        <p className="text-amber-500 text-xl font-medium">${price}</p>
      </div>
      <p className="text-[#64748b] mt-2">{description}</p>

      {menu && (
        <div className="flex justify-between items-center absolute bottom-3 left-3 right-3">
          <div className="text-3xl cursor-pointer text-white">
            <BsArrowUpRightCircle />
          </div>
          <button className="inline-flex items-center bg-[#f58220] py-2 px-4 rounded-md">
            <BsHandbag className="mr-2" /> <span>Add to Cart</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default FoodCard;
