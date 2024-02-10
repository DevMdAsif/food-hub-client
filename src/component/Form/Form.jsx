import { useState } from "react";
import authBg from "../../assets/images/contectImg/download.svg";

function Form({
  inputData,
  onSubmit,
  initialValue,
  buttonText,
  msgLabelText,
  title,
  desc,
}) {
  const [formData, setFormData] = useState(initialValue);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, message });
  };

  return (
    <div className="h-full flex lg:justify-between bg-[#040717] pb-24">
      <div className="pt-10 mb-5 md:mb-0 lg:ml-20 md:mx-auto mx-5">
        <div className="text-center mx-auto ">
          <div className="text-start max-w-md">
            <h3 className="text-4xl text-white font-medium">{title}</h3>
            <p className="text-[#717aa1] text-sm mt-4">{desc}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 mt-3">
          {inputData.map((data) => (
            <div key={data.name} className="space-y-2">
              <label className="text-white uppercase mb-3">{data.name}</label>

              <input
                className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#1e293b]"
                type={data.type}
                name={data.name}
                value={formData[data.name]}
                required
                placeholder={data.placeholder}
                onChange={handleChange}
              />
            </div>
          ))}
          {msgLabelText && (
            <div className="space-y-2">
              <label className="text-white">{msgLabelText}</label>
              <textarea
                className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#1e293b]"
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                required
                placeholder="Enter your message..."
                value={message}
                cols="30"
                rows="4"
              ></textarea>
            </div>
          )}
          <button
            type="submit"
            className="mt-5 text-white bg-[#f58220] hover:bg-orange-700 focus:outline-none font-medium duration-500 rounded-lg text-base w-full px-5 py-2.5 text-center "
          >
            {buttonText}
          </button>
        </form>
      </div>
      <div className="w-[40%] mt-7 xl:mr-20 mr-10 hidden lg:block">
        <img src={authBg} alt="" />
      </div>
    </div>
  );
}

export default Form;
