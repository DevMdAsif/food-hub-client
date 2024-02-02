import appImage from "../../../../assets/images/HomeImg/mockup-Lbl8JI0l.png";
import Banner from "../../../../component/banner/Banner";
function AppInfo() {
  return (
    <div className="h-full bg-[#020617] p-3 md:p-7">
      <div className="bg-[#1b1218] p-5 pb-0 rounded-2xl lg:grid lg:grid-cols-2 lg:p-20 lg:pb-0">
        <div className="lg:mt-20 space-y-5">
          <Banner header="Download App" title="Get Started With Us Today!" />
          <p className="text-white ">
            Discover food wherever and whenever and get your food delivered
            quickly.
          </p>
          <button className="primary_btn">Download Now</button>
        </div>
        <div className="m-10 mb-o">
          <img src={appImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
