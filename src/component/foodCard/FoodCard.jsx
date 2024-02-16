import { useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AuthContext } from "../../firebase/provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function FoodCard({ item, menu }) {
  const { name, price, description, image } = item;
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleAddToCart = async (item) => {
    const { _id, name, price, image } = item;
    if (user && user.email) {
      await axios
        .post("/api/carts", {
          foodId: _id,
          name,
          price,
          image,
          user: user.email,
        })
        .then((response) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "item added in cart",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "go to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="inline-flex items-center bg-[#f58220] text-white py-2 px-4 rounded-md"
          >
            <BsHandbag className="mr-2" /> <span>Add to Cart</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default FoodCard;
