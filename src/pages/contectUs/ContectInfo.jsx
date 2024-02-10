import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContectCard from "../../component/contectCard/ContectCard";

function ContectInfo() {
  return (
    <div className="space-y-6 lg:space-y-0 lg:space-x-6 lg:grid lg:grid-cols-3 xl:mx-20 mx-4">
      <ContectCard
        icon={<FaPhoneAlt />}
        title="Call Us"
        desc1="*1234 ### 456"
        desc2="*1234 ### 123"
      />
      <ContectCard
        icon={<MdEmail />}
        title="E-Mail"
        desc1="*user1@gmail.com"
        desc2="*user2@gmail.com"
      />
      <ContectCard
        icon={<FaLocationDot />}
        title="Address"
        desc1="37125 Maya Estate Dr, Victoria Road,"
        desc2="Warsaw, Poland - 234834"
      />
    </div>
  );
}

export default ContectInfo;
