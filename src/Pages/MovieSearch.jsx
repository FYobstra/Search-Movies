import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../Services/movies";
import { useLocation } from "react-router-dom";
import { GridMovies } from "../Layouts";

export default function MovieSearch() {
  const [movieSearch, setMovieSearch] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchSearchMovie(location.pathname.split("/")[2]).then((data) =>
      setMovieSearch(data)
    );
  }, []);

  return (
    <div>
      <GridMovies category={`Resultados para "${decodeURIComponent(location.pathname.split("/")[2])}"`} movies={movieSearch.results} />
    </div>
  );
}
