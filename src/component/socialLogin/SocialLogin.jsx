import { useContext } from "react";
import facebookSvg from "../../assets/images/socialIcon/facebook.svg";
import googleSvg from "../../assets/images/socialIcon/google.svg";
import { AuthContext } from "../../firebase/provider/AuthProvider";
function SocialLogin() {
  const { googleSingin, facebookSingin } = useContext(AuthContext);

  const handleGoogleSingin = () => {
    googleSingin();
  };

  const handleFacebookSingin = () => {
    facebookSingin();
  };

  return (
    <div className="mt-4 ">
      <div className="flex items-center">
        <div className="flex-1 border-t border-gray-300 my-4"></div>
        <div className="mx-4 text-gray-500">or</div>
        <div className="flex-1 border-t border-gray-300 my-4"></div>
      </div>
      <div className="flex items-center  w-full space-x-2 mt-3">
        <div className="social_button " onClick={handleFacebookSingin}>
          <img className="w-7" src={facebookSvg} alt="" />
          <p className="text-white">Log in with facebook </p>
        </div>
        <div className="social_button" onClick={handleGoogleSingin}>
          <img className="w-7" src={googleSvg} alt="" />
          <p className="text-white">Log in with google</p>
        </div>
      </div>
    </div>
  );
}

export default SocialLogin;
