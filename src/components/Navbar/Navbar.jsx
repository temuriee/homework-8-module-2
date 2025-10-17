import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    {
      link: "About Us",
      to: "/About",
    },
    {
      link: "Projects",
      to: "/Projects",
    },
    {
      link: "Impact",
      to: "/Impact",
    },
    {
      link: "Locations",
      to: "/Locations",
    },
  ];

  return (
    <div className=" flex items-center">
      <nav className="flex gap-x-[40px] flex-row">
        {links.map((eachElement) => (
          <Link
            className={`font-medium text-[#74768F] ${Styles.text}`}
            to={eachElement.to}
          >
            {eachElement.link}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
