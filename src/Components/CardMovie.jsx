import { Link } from "react-router-dom";

export default function CardMovie({ img, title, year, id }) {
  return (
    <Link to={`/movie-details/${id}`}>
      <div className="w-full flex flex-col gap-2 items-center hover:scale-105 transition-all duration-200 ease-linear cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/original${img}`}
          alt=""
          className="w-full rounded-md"
        />
        <h4 className="dark:text-gray-400">{title}</h4>
        <p className="dark:text-gray-400">{year}</p>
      </div>
    </Link>
  );
}
