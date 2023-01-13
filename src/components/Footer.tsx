import { TbSettings, TbHome, TbPokeball } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="navbar fixed bottom-0 items-center px-14 sm:px-28 md:px-40 lg:px-48 xl:px-60 bg-gray-300">
      <a className="navbar-start">
        <Link
          to=""
          className="text-3xl duration-300 hover:cursor-pointer active:scale-75"
        >
          <TbSettings />
        </Link>
      </a>
      <a className="navbar-center">
        <Link
          to="/"
          className="text-3xl duration-300 hover:cursor-pointer active:scale-75"
        >
          <TbHome />
        </Link>
      </a>
      <a className="navbar-end">
        <Link
          to="/mypokemon"
          className="text-3xl duration-300 hover:cursor-pointer active:scale-75"
        >
          <TbPokeball />
        </Link>
      </a>
    </footer>
  );
};

export default Footer;
