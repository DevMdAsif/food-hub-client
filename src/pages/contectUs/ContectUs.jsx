import Form from "../../component/Form/Form";
import ContectInfo from "./ContectInfo";
import img from "../../assets/images/contectImg/download.svg";

function ContectUs() {
  const inputData = [
    { name: "name", type: "text", placeholder: "name" },
    { name: "email", type: "email", placeholder: "email" },
  ];
  const handleSubmit = (e) => console.log(e);
  return (
    <div className="bg-[#040717] h-full">
      <div className="h-full flex lg:justify-between bg-[#040717] pb-24">
        <div className="pt-10 mb-5 md:mb-0 lg:ml-20 md:mx-auto mx-5">
          <div className="text-center mx-auto ">
            <div className="text-start max-w-md">
              <h3 className="text-4xl text-white font-medium">
                Contact Information
              </h3>
              <p className="text-[#717aa1] text-sm mt-4">
                Loremum et malesuada fames ac ante ipsum primis in faucibus. Sed
                molestie accumsan dui, non iaculis.
              </p>
            </div>
          </div>
          <Form
            msgLabelText="MESSAGE"
            inputData={inputData}
            onchange
            onSubmit={handleSubmit}
            initialValue={{ name: "", email: "", message: "" }}
            buttonText="Send Message"
            img={img}
          />
        </div>
        <div className="w-[40%]  hidden lg:block">
          <img src={img} alt="" />
        </div>
      </div>
      <ContectInfo />
    </div>
  );
}

export default ContectUs;
