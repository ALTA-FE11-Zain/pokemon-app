import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import logo from "assets/pokeball.png";
import Layout from "components/Layout";

import { PokemonType } from "utils/pokemon";

const Detail = () => {
  const { id_pokemon } = useParams();
  const [data, setData] = useState<PokemonType>({});
  const [picture, setPicture] = useState<string>("");
  const [animation, setAnimation] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`pokemon/${id_pokemon}`)
      .then((data) => {
        const results = data.data;

        const artwork = results.sprites.other["official-artwork"];

        const versions = results.sprites.versions;
        const genv = versions["generation-v"];
        const bw = genv["black-white"];

        setData(results);
        setPicture(artwork.front_default);
        setAnimation(bw.animated.front_default);

        console.log(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <section className="flex w-full p-2 gap-3">
          <section className="w-2/5">
            <div className="p-2 border-2 rounded-lg shadow-md w-full h-fit mb-4">
              <p className="border-b-2 mb-3 flex justify-center">Stats</p>
              <div className="flex justify-between">
                <p>hp</p>
                <p>99</p>
              </div>
              <div className="flex justify-between">
                <p>att</p>
                <p>99</p>
              </div>
              <div className="flex justify-between">
                <p>def</p>
                <p>99</p>
              </div>
              <div className="flex justify-between">
                <p>special-att</p>
                <p>99</p>
              </div>
              <div className="flex justify-between">
                <p>special-def</p>
                <p>99</p>
              </div>
              <div className="flex justify-between">
                <p>speed</p>
                <p>99</p>
              </div>
            </div>
            <div className="p-2 border-2 rounded-lg shadow-md w-full h-fit">
              <p className="border-b-2 mb-3 flex justify-center">Abilities</p>
              <p>abilities</p>
              <p>abilities</p>
              <p>abilities</p>
            </div>
          </section>
          <section className="w-3/5">
            <div className="p-2 border-2 rounded-lg shadow-md w-full h-fit">
              <div className="capitalize flex justify-between border-b-2 mb-3">
                <p className="flex items-center gap-1">
                  <img src={logo} alt="Image not found." className="w-5 h-5" />
                  {data.name}
                </p>
                <div className="flex justify-end">Lv.1</div>
              </div>
              <div className="flex justify-between">
                <p>height</p>
                <p>{data.height}</p>
              </div>
              <div className="flex justify-between">
                <p>weight</p>
                <p>{data.weight}</p>
              </div>
              <div className="flex justify-between">
                <p>exp</p>
                <p>{data.base_experience}</p>
              </div>
            </div>
            <div className="p-2 rounded-lg w-full h-fit flex justify-center">
              <img className="w-40" src={picture} alt="Not found." />
            </div>
            <div>
              <button className="flex justify-evenly text-center p-2 border-2 rounded-lg shadow-md w-full h-fit tracking-widest duration-300 active:scale-90">
                Catch!
              </button>
            </div>
          </section>
        </section>
        <section className="flex items-center gap-3 mx-2">
          <p className="w-3/12 flex flex-col items-center text-center">
            <img className="w-20 my-1" src={animation} alt="Not found." />
            <span className="my-1 border-2 rounded-lg shadow-md w-full h-fit">
              Poison
            </span>
            <span className="border-2 rounded-lg shadow-md w-full h-fit">
              Electric
            </span>
          </p>
          <div className="w-full p-2 border-2 rounded-lg shadow-md h-fit">
            <p className="border-b-2 mb-3 flex justify-center">Moves</p>
            <div className="pb-1 grid grid-cols-3 gap-x-3 text-center">
              <p>internationale</p>
              <p>internationale</p>
              <p>internationale</p>
              <p>frustration</p>
              <p>frustration</p>
              <p>frustration</p>
              <p>indomination</p>
              <p>indomination</p>
              <p>indomination</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Detail;
