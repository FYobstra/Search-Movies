import { useEffect } from "react";
import { Navbar, Footer } from "../Components";
import { useLocation } from "react-router-dom";

export default function MainWrapper({ component }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full min-h-[100vh] flex flex-col gap-10 dark:bg-black bg-white">
      <Navbar />
      <div>{component}</div>
      <Footer />
    </div>
  );
}
