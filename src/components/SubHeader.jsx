import TicketPercent from "@/assets/svgs/ticket-percent.svg";
import ArrowRight from "@/assets/svgs/arrow-right.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const SubHeader = () => {
  return (
    <div className="min-h-10 bg-blue-500 text-white flex items-center justify-center gap-2">
      <img src={TicketPercent} alt="percent icon" />
      <p className="flex items-center justify-center gap-2 text-base">
        30% off storewide — Limited time!{" "}
        <span className="hover:underline cursor-pointer">Shop Now</span>
        {/* <FaArrowRightLong /> */}
      </p>
      <img src={ArrowRight} alt="arrow icon" />
    </div>
  );
};

export default SubHeader;
