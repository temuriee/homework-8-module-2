import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Waterlogo from "/assets/imgs/Waterdrop.svg";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="flex max-w-[1800px] max-h-[80px] justify-between border-b-1 border-[#74768F] mx-auto pr-[24px] pl-[24px]">
      <div>
        <Link to="/">
          <img src={Waterlogo} alt="" />
        </Link>
      </div>

      <Navbar />
      <div className="flex justify-center items-center gap-x-[16px]">
        <button
          className={`pl-[24px] pr-[24px] pt-[16px] pb-[16px] bg-[#0A157A] border rounded-[8px] text-[#FBFBFB] hover:cursor-pointer ${Styles.mainBtn}`}
        >
          Sign In
        </button>
        <button
          className={`pl-[24px] pr-[24px] pt-[16px] pb-[16px] border-2 border-[#0A157A] rounded-[8px] text-[#0A157A]  hover:cursor-pointer ${Styles.secondBtn}  `}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
