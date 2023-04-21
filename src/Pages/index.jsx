import Home from "./Home";
import MovieDetails from "./MovieDetails";

const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/movie-details/:id", element: <MovieDetails /> }
];

export { publicRoutes };
