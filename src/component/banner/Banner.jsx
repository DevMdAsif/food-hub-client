function Banner({ header, title }) {
  return (
    <div
      className={`space-y-4 ${header === "Check it out" ? "text-center" : ""}`}
    >
      <div
        className={`bg-[#352018] w-32  rounded-xl text-[#e77b1f] ${
          header === "Check it out" ? "mx-auto" : ""
        } `}
      >
        <h3 className="text-center">{header}</h3>
      </div>
      <h4 className="text-white text-3xl font-medium">{title}</h4>
    </div>
  );
}

export default Banner;
