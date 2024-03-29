function Banner({ header, title }) {
  const condition = header === "Check it out";
  return (
    <div className={`space-y-4 ${condition ? "text-center" : ""}`}>
      <div
        className={`bg-[#352018] w-32  rounded-xl text-[#e77b1f] ${
          condition ? "mx-auto" : ""
        } `}
      >
        <h3 className="text-center">{header}</h3>
      </div>
      <h4 className="text-white text-3xl font-medium">{title}</h4>
    </div>
  );
}

export default Banner;
