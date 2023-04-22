import Home from "./Home";
import Catalogue from "./Catalogue";
import MovieDetails from "./MovieDetails";
import MovieSearch from "./MovieSearch";

const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/catalogue", element: <Catalogue /> },
    { path: "/movie-details/:id", element: <MovieDetails /> },
    { path: "/movie-search/:id", element: <MovieSearch /> }
];

export { publicRoutes };
