import React from "react";
import { Navbar, Footer } from "../Components";

export default function MainWrapper({ component }) {
  return (
    <div className="w-full dark:bg-black bg-white">
      <Navbar />
      <div className="pt-10">{component}</div>
      <Footer />
    </div>
  );
}
