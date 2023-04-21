import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieDetails, fetchSimilarMovies } from "../Services/movies";
import { CardMovie } from "../Components";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const location = useLocation();

  console.log(movie);

  useEffect(() => {
    window.scrollTo(0,0)
    fetchMovieDetails(location.pathname.split("/")[2]).then((res) =>
      setMovie(res)
    );
    fetchSimilarMovies(location.pathname.split("/")[2]).then((res) =>
      setSimilarMovie(res.results?.slice(0, 4))
    );
  }, [location]);

  console.log(similarMovie);

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center p-10 lg:p-20 gap-10 relative">
        <div className="w-full lg:w-1/2">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
          <h1 className="dark:text-white text-black text-2xl md:text-3xl xl:text-4xl font-bold">
            {movie.title}
          </h1>
          <div className="flex flex-col items-start md:items-center md:flex-row gap-5">
              {movie.genres?.map((data, index) => (
                <p
                  key={index}
                  className="dark:text-gray-400 text-black dark:bg-gray-800 bg-gray-200 rounded-sm py-1 px-2"
                >
                  {data.name}
                </p>
              ))}
            </div>
          <p className="dark:text-gray-400 text-black text-sm md:text-base">
            {movie.overview}
          </p>
          <div className="w-full flex flex-col items-start gap-4 text-sm">
            <p className="dark:text-white text-black font-semibold">
              Puntuacion: {"⭐️  ".repeat(movie.vote_average / 2)}
            </p>
            <div className="flex flex-col items-start md:items-center md:flex-row gap-2">
              <p className="dark:text-white text-black font-semibold">
                Producida por:{" "}
              </p>
              {movie.production_companies?.map((data, index) => (
                <p
                  key={index}
                  className="dark:text-gray-400 text-black dark:bg-gray-800 bg-gray-100 rounded-sm py-1 px-2"
                >
                  {data.name}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-start md:items-center md:flex-row gap-2">
              <p className="dark:text-white text-black font-semibold">
                Grabada en:{" "}
              </p>
              {movie.production_countries?.map((data, index) => (
                <p
                  key={index}
                  className="dark:text-gray-400 text-black dark:bg-gray-800 bg-gray-100 rounded-sm py-1 px-2"
                >
                  {data.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h1 className="dark:text-white text-gray-800 text-xl md:text-2xl lg:text-3xl font-semibold px-10 lg:px-32 mb-4">
        Recomendadas
      </h1>
      <section className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 px-10 lg:px-32">
        {similarMovie?.map((data, index) => (
          <CardMovie
            key={index}
            id={data.id}
            img={data.backdrop_path}
            title={data.title}
            year={data.release_date.split("-")[0]}
          />
        ))}
      </section>
    </>
  );
}
