import FoodCard from "../../../component/foodCard/FoodCard";

function MenuItems({ items }) {
  console.log(items);
  return (
    <div className="mt-16 mx-5 xl:mx-10 space-y-11 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} menu />
      ))}
    </div>
  );
}
export default MenuItems;
