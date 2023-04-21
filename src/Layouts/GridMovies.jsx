import React from "react";
import { CardMovie } from "../Components";
import { motion, AnimatePresence } from "framer-motion";

export default function GridMovies({ movies }) {
  return (
    <div className={`w-full flex justify-center ${!movies && "h-[100vh]"}`}>
      <AnimatePresence>
        {movies && (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full px-10 lg:px-0 md:max-w-4xl xl:max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {movies.map((data, index) => (
              <CardMovie
                key={index}
								id={data.id}
                img={data.backdrop_path}
                title={data.title}
                year={data.release_date.split("-")[0]}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
