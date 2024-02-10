import { useState } from "react";
import { Checkbox } from "@mui/material";

function Form({
  inputData,
  onSubmit,
  initialValue,
  buttonText,
  msgLabelText,
  setCheckbox,
  checkbox,
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
    setFormData(initialValue);
    setMessage("");
  };

  return (
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
      <p>
        <Checkbox
          onChange={() => setCheckbox(!checkbox)}
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "#f58220",
            },
          }}
        />
        <span className="text-white ">show password</span>
      </p>
      <button
        type="submit"
        className="mt-5 text-white bg-[#f58220] hover:bg-orange-700 focus:outline-none font-medium duration-500 rounded-lg text-base w-full px-5 py-2.5 text-center "
      >
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
