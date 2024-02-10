import Form from "../../component/Form/Form";
import ContectInfo from "./ContectInfo";

function ContectUs() {
  const inputData = [
    { name: "name", type: "text", placeholder: "name" },
    { name: "email", type: "email", placeholder: "email" },
  ];
  const handleSubmit = (e) => console.log(e);
  return (
    <div className="bg-[#040717] h-full">
      <Form
        msgLabelText="MESSAGE"
        inputData={inputData}
        onchange
        onSubmit={handleSubmit}
        initialValue={{ name: "", email: "", message: "" }}
        buttonText="Send Message"
        title="Contact Information"
        desc="Loremum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis."
      />
      <ContectInfo />
    </div>
  );
}

export default ContectUs;
