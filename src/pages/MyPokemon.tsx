import { useState, useEffect } from "react";

import Layout from "components/Layout";

import { PokemonType } from "utils/pokemon";

const MyPokemon = () => {
  const [datas, setDatas] = useState<PokemonType[]>([]);

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/ability/?limit=20&offset=20");
  }, []);

  function fetchData(next: string) {}

  return <Layout>No Pokemon. Try to catch one first!</Layout>;
};

export default MyPokemon;
