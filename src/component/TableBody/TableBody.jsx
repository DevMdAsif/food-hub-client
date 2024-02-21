import { useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import useFetchingCartItem from "../../hooks/useFetchingCartItem/useFetchingCartItem";

function TableBody({ item, quantityTotalPrice }) {
  const { _id, image, name, price } = item;
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const { refetch } = useFetchingCartItem();

  const handleHighQuantity = () => {
    quantityTotalPrice(+price);
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotal((prevTotal) => prevTotal + price);
  };

  const handleLowQuantity = () => {
    if (quantity > 1) {
      quantityTotalPrice(-price);
      setQuantity((prevQuantity) => prevQuantity - 1);
      setTotal((prevTotal) => prevTotal - price);
    }
  };

  // delete item using id

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/carts/${_id}`);
      if (response) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tbody>
      <tr className="border border-[#1e293b]">
        <td className="flex items-center p-5 space-x-4">
          <img className="w-14 h-14" src={image} alt="" />
          <h3 className="font-semibold">{name}</h3>
        </td>
        <td>
          <div className="bg-[#020617] w-[110px] py-[4px]  space-x-5 flex items-center justify-center border border-[#1e293b] rounded-2xl">
            {quantity === 1 ? (
              <i
                className="bg-[#1e293b] rounded-full p-[5px]"
                onClick={handleDelete}
              >
                <MdDeleteOutline className="cursor-pointer text-red-700 focus:outline-none" />
              </i>
            ) : (
              <button
                onClick={() => handleLowQuantity(price)}
                className="bg-[#1e293b] text-white py-[2px] px-[11px] rounded-full focus:outline-none"
              >
                -
              </button>
            )}
            <h4 className="text-white ">{quantity}</h4>

            <button
              onClick={() => handleHighQuantity(price)}
              className="bg-[#1e293b] text-white py-[2px] px-[9px] rounded-full focus:outline-none"
            >
              +
            </button>
          </div>
        </td>
        <td>{total.toFixed(2)}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
