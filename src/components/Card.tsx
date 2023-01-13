import { useNavigate } from "react-router-dom";
import { FC } from "react";

import logo from "assets/pokeball.png";

interface CardProps {
  url?: string;
  name?: string;
  image?: string;
}
const Card: FC<CardProps> = ({ url, name, image }) => {
  const navigate = useNavigate();
  function onClickDetail() {
    const id_pokemon = `${url}`.replace(
      "https://pokeapi.co/api/v2/pokemon/",
      ""
    );
    navigate(`detail/${id_pokemon}`);
    console.log(id_pokemon);
    console.log(`${image}`);
  }

  return (
    <div
      className="card card-compact bg-gray-400 shadow-xl duration-300 hover:cursor-pointer active:scale-95"
      onClick={() => onClickDetail()}
    >
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <p className="m-1 case capitalize md:text-lg flex justify-center">
        {name}
      </p>
    </div>
  );
};

export default Card;
