import { Link } from "react-router-dom";
import SubCard from "./SubCard";
import { useState } from "react";
import Loading from "../../component/Loading/Loading";
import TableBody from "../../component/TableBody/TableBody";
import useFetchingCartItem from "../../hooks/useFetchingCartItem/useFetchingCartItem";

function CartItems() {
  const { data, isError, isPending, error } = useFetchingCartItem();
  const [quantityPrice, setQuantityPrice] = useState(null);

  const quantityTotalPrice = (price) => {
    setQuantityPrice((prev) => prev + price);
  };

  return (
    <div className="bg-[#040717] pt-20">
      {isError && (
        <p className="text-red-700 text-center">Error:{error.message}</p>
      )}
      {isPending && <Loading />}
      <div className="h-full text-white md:px-10 xl:px-10 lg:px-4 px-4 lg:grid space-y-7 lg:space-y-0 lg:grid-cols-3 lg:gap-x-7">
        <div className="col-span-2">
          <div className="border border-[#1e293b] text-2xl rounded-t-xl">
            <h2 className="text-start p-5">Shopping Cart</h2>
          </div>
          <table className="w-full ">
            <thead className="border border-[#1e293b] bg-[#090d1f] ">
              <tr className="text-[#64748b]">
                <th className="text-start p-3">PRODUCTS</th>
                <th className="text-start p-3">Quantity</th>
                <th className="text-start p-3">TOTAL</th>
              </tr>
            </thead>
            {data?.map((item) => (
              <TableBody
                key={item._id}
                item={item}
                quantityTotalPrice={quantityTotalPrice}
              />
            ))}
          </table>
          <div className="border border-[#1e293b] p-5 rounded-b-xl">
            <Link to="/menu">
              <button className="text-[#f58220] border border-[#f58220] px-[20px] py-2 rounded-xl hover:text-white hover:bg-[#f58220] duration-700 ">
                Shop More
              </button>
            </Link>
          </div>
        </div>
        <SubCard data={data} quantityPrice={quantityPrice} />
      </div>
    </div>
  );
}

export default CartItems;
