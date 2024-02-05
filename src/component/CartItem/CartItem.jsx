function CartItem({ item }) {
  const { image, name, description, price } = item;

  return (
    <div className="text-white flex justify-between ">
      <img
        className="w-20 h-20 rounded-b-full rounded-r-full"
        src={image}
        alt=""
      />
      <div className="ml-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl">{name}</h3>
          </div>
          <div>
            <p className="text-[#e7721c] text-xl font-medium inline-flex w-20">
              $ {price}
            </p>
          </div>
        </div>
        <p className="text-sm text-[#64748b]">{description}</p>
      </div>
    </div>
  );
}

export default CartItem;
