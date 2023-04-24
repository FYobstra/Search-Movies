import { CardMovie } from "../Components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function GridMovies({ movies, category }) {
  const location = useLocation();

  return (
    <div className={`w-full flex justify-center ${!movies && "h-[100vh]"}`}>
      {movies && (
        <div className="w-full lg:px-0 md:max-w-4xl xl:max-w-6xl flex flex-col">
          <div className="w-full px-10 lg:px-0 md:max-w-4xl xl:max-w-6xl flex items-center justify-between">
            <p className="dark:text-white lg:text-lg">{category}</p>
            {location.pathname === "/" && (
              <Link
                to={"/catalogue"}
                className="dark:text-white lg:text-lg cursor-pointer hover:underline"
              >
                Ver más
              </Link>
            )}
          </div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full px-10 lg:px-0 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {movies.map((data, index) => (
              <CardMovie
                key={index}
                id={data.id}
                img={data.poster_path ? data.poster_path : null}
                title={data.title}
                year={data.release_date.split("-")[0]}
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
