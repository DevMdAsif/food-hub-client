import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function TableBody({ item, quantityTotalPrice }) {
  const { image, name, price } = item;
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  const handleHighQuantity = () => {
    quantityTotalPrice(+price)
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotal((prevTotal) => prevTotal + price);
  };

  const handleLowQuantity = () => {
    if (quantity > 1) {
      quantityTotalPrice(-price)
      setQuantity((prevQuantity) => prevQuantity - 1);
      setTotal((prevTotal) => prevTotal - price);
    }
  };

  return (
    <tbody>
      <tr className="border border-[#1e293b]">
        <td className="flex items-center p-5 space-x-4">
          <RxCross2 className="cursor-pointer " />
          <img className="w-14 h-14" src={image} alt="" />
          <h3 className="font-semibold">{name}</h3>
        </td>
        <td>
          <div className="bg-[#020617] w-[100px] py-1  space-x-5 flex items-center justify-center border border-[#1e293b] rounded-2xl">
            <button
              onClick={() => handleLowQuantity(price)}
              className="bg-[#1e293b] text-white px-[7px] rounded-full focus:outline-none"
            >
              -
            </button>
            <h4 className="text-white ">{quantity}</h4>

            <button
              onClick={() => handleHighQuantity(price)}
              className="bg-[#1e293b] text-white  px-[7px] rounded-full focus:outline-none"
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
