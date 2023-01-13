import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "components/Layout";
import Card from "components/Card";

import { PokemonType } from "utils/pokemon";

const Index = () => {
  const [datas, setDatas] = useState<PokemonType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`pokemon/`)
      .then((data) => {
        const { results } = data.data;
        setDatas(results);
        console.log(data.data);
        console.log(results);
        console.log(results.name);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  }

  return (
    <Layout>
      <div className="gap-4 m-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {datas.map((data) => (
          <Card
            key={`${data.url}`.replace(
              "https://pokeapi.co/api/v2/pokemon/",
              ""
            )}
            url={`${data.url}`.replace(
              "https://pokeapi.co/api/v2/pokemon/",
              ""
            )}
            name={data.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
