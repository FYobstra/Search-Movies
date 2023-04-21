import { useState } from "react";
import { IoMoonOutline, IoCloseOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Logo, bgRayDark, bgRayLight } from "../Images";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
    <nav className="w-full relative">
      <img
        src={darkTheme ? bgRayDark : bgRayLight}
        alt=""
        className="absolute w-[130rem]"
      />
      <div className="w-full flex justify-between items-center px-4 lg:px-10 py-4 backdrop-blur-md dark:bg-[#1118276b] fixed z-20">
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
          <NavLink
            to={"/"}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <img src={Logo} alt="Logo search movies" className="w-8" />
            <h1 className="dark:text-white text-black text-sm hidden sm:block lg:text-base font-semibold">
              Search movies
            </h1>
          </NavLink>
        </div>
        <div className="text-gray-700 dark:text-gray-300 text-sm flex items-center md:gap-10">
          <NavLink
            to={"/catalogue"}
            onClick={() => setIsOpen(false)}
            className="hidden lg:block dark:hover:text-white hover:text-gray-400"
          >
            Catalogo
          </NavLink>
          <NavLink
            to="https://github.com/FYobstra"
            onClick={() => setIsOpen(false)}
            target="_blank"
            className="hidden lg:block dark:hover:text-white hover:text-gray-400"
          >
            Github
          </NavLink>
          {darkTheme ? (
            <FiSun
              className="w-fit text-gray-300 text-lg cursor-pointer dark:hover:text-white"
              onClick={() => changeTheme()}
            />
          ) : (
            <IoMoonOutline
              className="w-fit text-black text-lg cursor-pointer hover:text-gray-400"
              onClick={() => changeTheme()}
            />
          )}
          <NavLink to={"/register"}>
            <button className="bg-color-primary-transparent border-none rounded-lg py-2 hidden md:block px-3 text-color-primary">
              Registrate
            </button>
          </NavLink>
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
            className="w-full fixed top-0 z-10 bg-white-bg dark:bg-black-bg h-[100vh] overflow-hidden text-gray-500 flex flex-col gap-10 text-center pt-24 px-6"
          >
            <NavLink
              to={"/"}
              onClick={() => setIsOpen(false)}
              className="dark:hover:text-white hover:text-gray-400 text-xl"
            >
              Inicio
            </NavLink>
            <NavLink
              to={"/catalogue"}
              onClick={() => setIsOpen(false)}
              className="dark:hover:text-white hover:text-gray-400 text-xl"
            >
              Catalogo
            </NavLink>
            <NavLink
              to="https://github.com/FYobstra"
              onClick={() => setIsOpen(false)}
              target="_blank"
              className="dark:hover:text-white hover:text-gray-400 text-xl"
            >
              Github
            </NavLink>
            <NavLink to={"/register"} onClick={() => setIsOpen(false)}>
              <button className="w-full bg-color-primary-transparent border-none rounded-lg py-3 text-color-primary">
                Registrate
              </button>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
