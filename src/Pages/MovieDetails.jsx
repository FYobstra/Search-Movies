import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../Services/movies";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  console.log(movie);

  useEffect(() => {
    fetchMovieDetails(location.pathname.split("/")[2]).then((res) =>
      setMovie(res)
    );
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center p-10 lg:p-20 gap-10">
      <div className="w-full lg:w-1/2">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
        <h1 className="dark:text-white text-black text-2xl md:text-3xl xl:text-4xl fomt-bold">
          {movie.title}
        </h1>
        <p className="dark:text-gray-400 text-black text-sm md:text-base">{movie.overview}</p>
        <div className="w-full flex flex-col items-start gap-4 text-sm">
          <p className="dark:text-white text-black font-semibold">
            Puntuacion: {"⭐️  ".repeat(movie.vote_average / 2)}
          </p>
          <div className="flex flex-col items-start md:items-center md:flex-row gap-2">
            <p className="dark:text-white text-black font-semibold">Genero: </p>
            {movie.genres?.map((data, index) => (
              <p key={index} className="dark:text-gray-400 text-black bg-gray-800 rounded-sm py-1 px-2">
                {data.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row gap-2">
            <p className="dark:text-white text-black font-semibold">
              Producida por:{" "}
            </p>
            {movie.production_companies?.map((data, index) => (
              <p key={index} className="dark:text-gray-400 text-black bg-gray-800 rounded-sm py-1 px-2">
                {data.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row gap-2">
            <p className="dark:text-white text-black font-semibold">
              Grabada en:{" "}
            </p>
            {movie.production_countries?.map((data, index) => (
              <p key={index} className="dark:text-gray-400 text-black bg-gray-800 rounded-sm py-1 px-2">
                {data.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
