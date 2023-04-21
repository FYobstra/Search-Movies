import { useEffect, useState } from "react";
import { fetchAllMovies } from "../Services/movies";
import { GridMovies } from "../Layouts";

export default function Catalogue() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies().then((res) => setMovies(res));
  }, []);

  return (
    <div>
      <GridMovies movies={movies.results} />
    </div>
  );
}
