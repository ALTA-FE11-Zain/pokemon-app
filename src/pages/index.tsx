import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "components/Layout";
import Card from "components/Card";

import { PokemonType } from "utils/pokemon";

const Index = () => {
  const [datas, setDatas] = useState<PokemonType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    fetchData(0);
  }, []);

  function fetchData(offset: number) {
    axios
      .get(`pokemon/?limit=20&offset=${offset}`)
      .then((data) => {
        const { results, total_pages } = data.data;
        setDatas(results);
        setTotalPage(total_pages);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  }

  function nextPage() {
    const newPage = page + 20;
    setPage(newPage);
    fetchData(newPage);

    const nowPage = currentPage + 1;
    setCurrentPage(nowPage);
  }

  function prevPage() {
    const newPage = page - 20;
    setPage(newPage);
    fetchData(newPage);

    const nowPage = currentPage - 1;
    setCurrentPage(nowPage);
  }

  return (
    <Layout>
      <div className="btn-group flex justify-between m-5">
        <button
          className="rounded-full w-fit h-fit text-4xl md:text-5xl duration-300 active:scale-75 disabled:text-gray-400 disabled:scale-100"
          onClick={() => prevPage()}
          disabled={currentPage === 1}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <p className="w-fit text-2xl md:text-4xl">{currentPage}</p>
        <button
          className="rounded-full w-fit h-fit text-4xl md:text-5xl duration-300 active:scale-75 disabled:text-gray-400 disabled:scale-100"
          onClick={() => nextPage()}
          disabled={page === totalPage}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
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
          />
        ))}
      </div>
      <div className="btn-group flex justify-between m-5">
        <button
          className="rounded-full w-fit h-fit text-4xl md:text-5xl duration-300 active:scale-75 disabled:text-gray-400 disabled:scale-100"
          onClick={() => prevPage()}
          disabled={currentPage === 1}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <p className="w-fit text-2xl md:text-4xl">{currentPage}</p>
        <button
          className="rounded-full w-fit h-fit text-4xl md:text-5xl duration-300 active:scale-75 disabled:text-gray-400 disabled:scale-100"
          onClick={() => nextPage()}
          disabled={page === totalPage}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </Layout>
  );
};

export default Index;
