import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full border-t dark:border-t-gray-800 px-10 md:px-20 flex justify-between items-center py-5 mt-10">
      <p className="dark:text-gray-500 text-sm">Echo por Facundo Yobstraibier</p>
      <FaGithub className="text-xl dark:text-gray-500" />
    </div>
  );
}
