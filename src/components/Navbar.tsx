import { Link } from "react-router-dom";

import logo from "assets/pokemon-logo.png";

const Navbar = () => {
  return (
    <div className="z-10 navbar fixed top-0 bg-gray-300">
      <div className="navbar-start"></div>
      <Link
        to="/"
        className="navbar-center w-24 duration-300 hover:cursor-pointer active:scale-75"
      >
        <img src={logo} alt="Image not found." />
      </Link>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
