import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Catalogue from "./Catalogue";
import MovieDetails from "./MovieDetails";

const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/catalogue", element: <Catalogue /> },
    { path: "/movie-details/:id", element: <MovieDetails /> }
];

export { publicRoutes };
