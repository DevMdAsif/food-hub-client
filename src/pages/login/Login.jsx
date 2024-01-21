import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import authBg from "../../assets/images/authImg/auth-bg-WWHEDCJO.png";
import { Checkbox } from "@mui/material";
import { AuthContext } from "../../firebase/provider/AuthProvider";
import SocialLogin from "../../component/socialLogin/SocialLogin";
import { Link } from "react-router-dom";

function Login() {
  const [checkbox, setCheckbox] = useState(false);
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    login(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="h-screen flex lg:justify-between bg-gradient-to-t from-[#301e19] via-[#1b1219] to-[#1b1219] pb-24">
      <div className=" pt-10 mb-5 md:mb-0 lg:ml-20 md:mx-auto mx-5">
        <div className="text-center mx-auto ">
          <div className="text-start ">
            <h3 className="text-4xl text-white font-medium">Login</h3>
            <p className="text-[#717aa1] text-sm mt-4">
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md md:mt-14 mt-6"
        >
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
            Login
          </button>
          <p className="text-white mt-2 text-sm">
            Do not have an account?
            <Link className="text-[#f58220] ml-2" to="/singup">
              Register
            </Link>
          </p>
        </form>
        <SocialLogin />
      </div>
      <div className="w-[40%] hidden lg:block">
        <img src={authBg} alt="" />
      </div>
    </div>
  );
}

export default Login;
