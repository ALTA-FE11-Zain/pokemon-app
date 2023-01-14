import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

        console.log(data.data);
        console.log(results);
        console.log(results.name);
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
      <div className="btn-group flex justify-center m-10">
        <button
          className="px-2 btn border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base disabled:dark:text-zinc-800"
          onClick={() => prevPage()}
          disabled={currentPage === 1}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <button className="px-3 border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:cursor-default hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 md:text-base">
          {currentPage}
        </button>
        <button
          className="px-2 btn border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base disabled:dark:text-zinc-800"
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
            name={data.name}
          />
        ))}
      </div>
      <div className="btn-group flex justify-center m-10">
        <button
          className="px-2 btn border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base disabled:dark:text-zinc-800"
          onClick={() => prevPage()}
          disabled={currentPage === 1}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <button className="px-3 border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:cursor-default hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 md:text-base">
          {currentPage}
        </button>
        <button
          className="px-2 btn border-transparent w-fit text-[0.75rem] bg-zinc-300 text-zinc-900 hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base disabled:dark:text-zinc-800"
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
