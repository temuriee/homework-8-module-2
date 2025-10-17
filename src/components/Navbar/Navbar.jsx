import { Link } from "react-router-dom";

const Navbar = () => {
  const test = [
    {
      link: "Home",
      to: "/",
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
      link: "Loca tions",
      to: "/Locations",
    },
  ];

  return (
    <div className=" flex items-center">
      <nav className="flex gap-10 flex-row">
        {test.map((eachElement) => (
          <Link
            className="  justify-center items-center font-medium text-[#74768F]"
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
