import Cover from "../../../component/cover/Cover";
import FoodCard from "../../../component/foodCard/FoodCard";
import { Link } from "react-router-dom";

function DeshesCategory({ item, title }) {
  return (
    <>
      <Cover
        header={title}
        title="Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi."
      />
      <div className="mt-16 space-y-11 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-5">
        {item.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-20">
        <Link to={`/menu/${title}`}>
          <button className="primary_btn">Order your favouriter {title}</button>
        </Link>
      </div>
    </>
  );
}

export default DeshesCategory;
