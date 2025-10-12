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
      link: "Locations",
      to: "/Locations",
    },
  ];

  return (
    <div>
      <nav className="flex flex-row">
        {test.map((eachElement) => (
          <Link
            className="max-w-[1000px] flex flex-row justify-center items-center font-[500] color-[#74768F]"
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
