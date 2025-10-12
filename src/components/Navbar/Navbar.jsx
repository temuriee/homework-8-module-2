import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-[1000px]">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Impact">Impact</Link>
        <Link to="/Locations">Locations</Link>
      </nav>
    </div>
  );
};

export default Navbar;
