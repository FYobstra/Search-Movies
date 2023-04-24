import { Link } from "react-router-dom";
import { TbMovie } from "react-icons/tb";

export default function CardMovie({ img, title, year, id, recommended }) {
  return (
    <Link to={`/movie-details/${id}`}>
      <div className="w-fit flex flex-col gap-1 items-center hover:scale-105 transition-all duration-200 ease-linear cursor-pointer">
        <img
          src={img ? `https://image.tmdb.org/t/p/w500${img}` : "https://via.placeholder.com/500x750?text=no-img"}
          alt=""
          className={`${recommended ? "w-1/2" : "w-full"} rounded-md`}
        />
        <h4 className="dark:text-gray-100 text-center">{title}</h4>
        <p className="dark:text-gray-400">{year}</p>
        <div className="flex items-center gap-2 text-lg">
          <TbMovie className="dark:text-gray-400" />
          <p className="dark:text-gray-400">Película</p>
        </div>
      </div>
    </Link>
  );
}
