import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="w-full border-t dark:border-t-gray-800 px-10 md:px-20 flex justify-between items-center py-5 mt-10">
      <p className="dark:text-gray-500 text-sm">
        Hecho por Facundo Yobstraibier
      </p>
      <Link target="_blanck" to={"https://github.com/FYobstra"}>
        <FaGithub className="text-xl dark:text-gray-500 cursor-pointer" />
      </Link>
    </div>
  );
}
