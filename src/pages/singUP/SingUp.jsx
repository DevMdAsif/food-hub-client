import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import authBg from "../../assets/images/authImg/auth-bg-WWHEDCJO.png";
import { Checkbox } from "@mui/material";
import { AuthContext } from "../../firebase/provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../component/socialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SingUp() {
  const [error, setError] = useState("");

  const [checkbox, setCheckbox] = useState(false);
  const { singUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { Name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setError("password dose not match");
      return;
    }
    // singup using firebase

    await singUp(email, password)
      .then(async () => {
        setError("");

        // singUp in database

        await axios
          .post("/api/user", {
            name: Name,
            email,
            password,
          })
          .then(() => {
            // singup success tost and navigation

            Swal.fire({
              position: "center",
              icon: "success",
              title: "sing up successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch(function (error) {
            setError(error);
          });
      })
      .catch(() => {
        // singup unsuccess tost
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User already exist",
        });
      });
  };
  return (
    <div className="h-full flex lg:justify-between bg-gradient-to-t from-[#301e19] via-[#1b1219] to-[#1b1219] pb-24">
      <div className="pt-10 mb-5 md:mb-0 lg:ml-20 md:mx-auto mx-5">
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
          className="max-w-md md:mt-6 mt-6"
        >
          <div className="relative z-0 w-full mb-5 group space-y-2">
            <label className="text-white uppercase mb-3">Full Name</label>
            <input
              {...register("Name", {
                required: true,
                minLength: 4,
                maxLength: 30,
              })}
              type="text"
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] "
              placeholder="Enter your name"
            />

            {errors.password?.type === "required" && (
              <small className="text-red-500">name is required</small>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group space-y-2">
            <label className="text-white uppercase mb-3">Email</label>

            <input
              {...register("email", { required: true })}
              type="text"
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] "
              placeholder="Enter your email"
            />
            {errors.password?.type === "required" && (
              <small className="text-red-500">Email is required</small>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group space-y-2">
            <label className="text-white uppercase mb-3">Password</label>
            <input
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
              })}
              type={checkbox ? "text" : "password"}
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] "
              placeholder="Enter your password"
            />
            {errors.password?.type === "required" && (
              <small className="text-red-500">password is required</small>
            )}
          </div>

          <div className="relative z-0 w-full mb-5 group space-y-2">
            <label className="text-white uppercase mb-3">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", { required: true })}
              type={checkbox ? "text" : "password"}
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] "
              placeholder="confirm password"
            />
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

          <p className="text-white mt-2 text-sm">
            Already have an account ?
            <Link className="text-[#f58220] ml-2" to="/login">
              Login
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

export default SingUp;
