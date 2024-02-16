import { useContext, useState } from "react";
import authBg from "../../assets/images/authImg/auth-bg-WWHEDCJO.png";
import { AuthContext } from "../../firebase/provider/AuthProvider";
import SocialLogin from "../../component/socialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../../component/Form/Form";

function Login() {
  const [checkbox, setCheckbox] = useState(false);
  const { login } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleSubmit = async (data) => {
    const { email, password } = data;

    try {
      await login(email, password)
        .then((userCredential) => {
          console.log("user info", userCredential);
          if (userCredential) {
            navigate(from, { replace: true });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const inputData = [
    { name: "email", type: "email", placeholder: "email" },
    {
      name: "password",
      type: checkbox ? "text" : "password",
      placeholder: "password",
    },
  ];
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
        <Form
          checkbox={checkbox}
          setCheckbox={setCheckbox}
          inputData={inputData}
          onSubmit={handleSubmit}
          initialValue={{ email: "", password: "" }}
          buttonText="Login"
          img={authBg}
          title="Login"
          desc="Welcome back! Please enter your details."
        />
        <p className="text-white mt-2 text-sm">
          Already have an account ?
          <Link className="text-[#f58220] ml-2" to="/singup">
            Register
          </Link>
        </p>

        <SocialLogin />
      </div>
      <div className="w-[40%] hidden lg:block">
        <img src={authBg} alt="" />
      </div>
    </div>
  );
}

export default Login;
