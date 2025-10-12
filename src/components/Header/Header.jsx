import Navbar from "../Navbar/Navbar";
import Waterlogo from "/assets/imgs/Waterdrop.svg";

const Header = () => {
  return (
    <div className="flex max-w-[1440px] justify-around">
      <img src={Waterlogo} alt="" />
      <Navbar />
    </div>
  );
};

export default Header;
