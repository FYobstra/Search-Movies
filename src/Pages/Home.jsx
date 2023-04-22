import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchAllMovies } from "../Services/movies";
import { GridMovies } from "../Layouts";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const Navigate = useNavigate()

  useEffect(() => {
    fetchAllMovies().then((res) => setMovies(res));
  }, []);

  function searchMovie(e) {
    if(e.key === "Enter" ) {
      Navigate(`/movie-search/${encodeURIComponent(e.target.value)}`)
    }
  }

  return (
    <main className="w-full flex flex-col gap-20 pb-16 relative">
      <motion.header
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 25, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col justify-center items-center gap-5"
      >
        <h1 className="dark:text-white text-gray-800 text-3xl md:text-4xl lg:text-6xl font-bold">
          Lista de películas
        </h1>
        <p className="dark:text-white text-gray-800 text-xs md:text-base">
          Sitio realizado con React, Tailwind y Framer Motion
        </p>
        <div className="w-[60%] flex items-center max-w-xl rounded-md border dark:border-gray-600 bg-gray-100 dark:bg-gray-900 pl-2 py-1">
          <AiOutlineSearch className="dark:text-gray-400" />
          <input type="search" onKeyDown={(e) => searchMovie(e)} placeholder="Buscá tu película..." className="w-full px-2 bg-transparent dark:text-gray-400 outline-none" />
        </div>
      </motion.header>
      <section className="w-full h-full">
        <GridMovies
          category={"Más popular"}
          movies={movies.results?.slice(0, 12)}
        />
      </section>
    </main>
  );
}
