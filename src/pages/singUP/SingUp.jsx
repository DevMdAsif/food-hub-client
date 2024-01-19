import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import authBg from "../../assets/images/authImg/auth-bg-WWHEDCJO.png";
import { Checkbox } from "@mui/material";
import { AuthContext } from "../../firebase/provider/AuthProvider";
import Swal from "sweetalert2";

function SinUp() {
  const [error, setError] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const { singUp } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, email, number, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setError("password dose not match");
      return;
    }
    singUp(email, password)
      .then((userCredential) => {
        setError("");
        if (userCredential) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "sing up successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(userCredential);
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User already exist",
          });
        }
      });
  };
  return (
    <div className="h-full flex lg:justify-between bg-gradient-to-t from-[#301e19] via-[#1b1219] to-[#1b1219] pb-24">
      <div className="md:pt-20 pt-10 mb-5 md:mb-0 lg:ml-20 md:mx-auto mx-5">
        <div className="text-center mx-auto ">
          <div className="text-start max-w-md">
            <h3 className="text-4xl text-white font-medium">Register</h3>
            <p className="text-[#717aa1] text-sm mt-4">
              Don not have an account? Create your account, it takes less than a
              minute at Yum
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md md:mt-14 mt-6"
        >
          <div className="relative z-0 w-full mb-5 group ">
            <input
              {...register("Name", {
                required: true,
                minLength: 4,
                maxLength: 30,
              })}
              type="text"
              className="input-style peer"
              placeholder=""
            />
            <label className="label-style">Full Name</label>
            {errors.password?.type === "required" && (
              <small className="text-red-500">name is required</small>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("email", { required: true })}
              type="text"
              className="input-style peer"
              placeholder=""
            />
            <label className="label-style">Email</label>
            {errors.password?.type === "required" && (
              <small className="text-red-500">Email is required</small>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
              })}
              type={checkbox ? "text" : "password"}
              className="input-style peer"
              placeholder=""
            />
            <label className="label-style">Password</label>
            {errors.password?.type === "required" && (
              <small className="text-red-500">password is required</small>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("confirmPassword", { required: true })}
              type={checkbox ? "text" : "password"}
              className="input-style peer"
              placeholder=""
            />
            <label className="label-style">Confirm Password</label>
          </div>
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
          {errors.password?.type === "required" && (
            <small className="text-red-500">Confirm is required</small>
          )}
          {errors.password?.type === "pattern" && (
            <small className="text-red-500">
              Password minimum 8 characters, at least 1 uppercase letter, 1
              lowercase letter and 1 number ,maximum 30 characters,
            </small>
          )}
          <small className="text-red-600">{error}</small>

          <button
            type="submit"
            className="mt-5 text-white bg-[#f58220] hover:bg-orange-700 focus:outline-none font-medium duration-500 rounded-lg text-base w-full px-5 py-2.5 text-center "
          >
            Register Now
          </button>
        </form>
      </div>
      <div className="w-[40%] hidden lg:block">
        <img src={authBg} alt="" />
      </div>
    </div>
  );
}

export default SinUp;
