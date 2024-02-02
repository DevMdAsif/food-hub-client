import { IoIosArrowForward } from "react-icons/io";
function MenuItems({ food }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-5 mt-10 mx-5">
      {food.map((item) => (
        <div
          key={item._id}
          className=" mx-auto bg-slate-900 text-white rounded overflow-hidden shadow-lg w-full"
        >
          <img
            className="p-2 h-[269px] w-full rounded-2xl"
            src={item.image}
            alt={item.name}
          />
          <div className="px-3 py-5">
            <h2 className="font-bold mb-2 text-2xl">{item.name}</h2>
            <p className="  text-xl  font-bold text-[#facc15]">
              $<span className="text-white ml-1 ">{item.price}</span>
            </p>
            <button className="inline-flex underline decoration-dashed decoration-1 text-xl">
              Order Now
              <IoIosArrowForward className="mt-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MenuItems;
