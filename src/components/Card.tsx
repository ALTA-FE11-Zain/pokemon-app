import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FC } from "react";
import axios from "axios";

interface CardProps {
  url?: string;
}
const Card: FC<CardProps> = ({ url }) => {
  const navigate = useNavigate();
  const [pokemonName, setPokemonName] = useState<string>();
  const [pokemonPic, setPokemonPic] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  function onClickDetail() {
    const id_pokemon = `${url}`.replace(
      "https://pokeapi.co/api/v2/pokemon/",
      ""
    );
    navigate(`detail/${id_pokemon}`);
  }

  function fetchData() {
    axios
      .get(`pokemon/${url}`)
      .then((data) => {
        const results = data.data;
        const artwork = results.sprites.other["official-artwork"];
        setPokemonPic(artwork.front_default);
        setPokemonName(results.name);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  }

  return (
    <div
      className="card card-compact p-2 bg-gray-400 shadow-xl duration-300 hover:cursor-pointer active:scale-95"
      onClick={() => onClickDetail()}
    >
      <figure className="m-1 rounded-lg bg-gray-300">
        <img src={pokemonPic} alt={pokemonName} />
      </figure>
      <p className="m-1 case capitalize md:text-lg flex justify-center">
        {pokemonName}
      </p>
    </div>
  );
};

export default Card;
