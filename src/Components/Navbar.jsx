import { useState } from "react";
import { IoMoonOutline, IoCloseOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Logo ,bgRayDark, bgRayLight } from "../Images";  
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function changeTheme() {
    setDarkTheme(!darkTheme);
    const html = document.querySelector("html");
    html.classList.contains("dark")
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  }

  const item = {
    exit: {
      opacity: 0,
      width: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  return (
    <nav className="w-full bg-transparent backdrop-blur-2xl">
      <div className="w-full flex justify-between items-center px-4 lg:px-10 py-4">
        <div className="flex items-center gap-3">
          {isOpen ? (
            <IoCloseOutline
              className="dark:text-gray-300 text-black text-xl"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <RxHamburgerMenu
              className="dark:text-gray-300 text-black text-xl lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <img src={Logo} alt="Logo search movies" className="w-8" />
          <h1 className="dark:text-white text-black text-sm hidden sm:block lg:text-base font-semibold">
            Search movies
          </h1>
        </div>
        <div className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-10">
          <Link className="hidden lg:block">Catalogo</Link>
          <Link className="hidden lg:block">Github</Link>
          {darkTheme ? (
            <FiSun
              className="w-fit text-gray-300 text-lg"
              onClick={() => changeTheme()}
            />
          ) : (
            <IoMoonOutline
              className="w-fit text-black text-lg"
              onClick={() => changeTheme()}
            />
          )}
          <button className="bg-color-primary-transparent border-none rounded-lg py-2 hidden md:block px-3 text-color-primary">
            Registrate
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={item}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
            className="w-full bg-white-bg dark:bg-black-bg h-[100vh] text-gray-500 flex flex-col gap-5 overflow-hidden pt-10 pl-6"
          >
            <p>Catalogo</p>
            <p>Github</p>
            <p className="text-color-primary md:hidden">Registrate</p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
