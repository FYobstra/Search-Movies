const apiKey = import.meta.env.VITE_API_KEY;

export const fetchAllMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`
  );
  const data = await response.json();
  return data;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`
  );
  const data = await response.json();
  return data;
};

export const fetchSimilarMovies = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=es`
  );
  const data = await response.json();
  return data;
};