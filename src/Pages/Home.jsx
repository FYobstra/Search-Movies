import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchAllMovies } from "../Services/movies";
import { GridMovies } from "../Layouts";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies().then((res) => setMovies(res));
  }, []);

  return (
    <main className="w-full flex flex-col gap-20 py-16 relative">
      <motion.header
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 25, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col justify-center items-center gap-5"
      >
        <h1 className="dark:text-white text-gray-800 text-3xl md:text-4xl lg:text-6xl font-bold">
          Lista de peliculas
        </h1>
        <p className="dark:text-white text-gray-800 text-xs md:text-base">
          Sitio realizado con React, Tailwind y Framer Motion
        </p>
      </motion.header>
      <section>
        <GridMovies movies={movies.results?.slice(0, 12)} />
      </section>
    </main>
  );
}
