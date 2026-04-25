import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { cn } from "../utils/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Jobs",
      path: "/jobs",
    },
  ];

  const navlinks = links.map((link) => (
    <li
      key={link.name}
      className="hover:text-blue-600 font-semibold duration-500 cursor-pointer"
    >
      <Link to={link.path} onClick={() => setIsOpen(!isOpen)}>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <>
      {/* desktop nav */}
      <nav
        className={cn(
          "shadow-md shadow-blue-200 hidden md:flex justify-between items-center px-15",
          scrolled ? "h-16 bg-white/75 backdrop-blur-lg border-b border-t-gray-200" : "h-18",
        )}
      >
        {" "}
        <a href="#" className="flex">
          <img src="/logo.svg" alt="logo" />
        </a>{" "}
        <ul className="flex gap-5">{navlinks}</ul>
      </nav>

      {/* mobile nav */}
      <nav className="md:hidden relative h-18 flex justify-between px-5">
        {" "}
        <a href="#" className="flex">
          <img src="/logo.svg" alt="logo" className="w-37" />
        </a>{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer hover:text-blue-600 transition-all duration-300"
        >
          {" "}
          <LuMenu size={24} className={cn(isOpen ? "hidden" : "flex")} />{" "}
        </button>
        <ul
          className={cn(
            "bg-blue-300 fixed top-0 w-full h-screen flex flex-col justify-center items-center gap-5 transition-all duration-500",
            isOpen ? "left-0" : "left-195",
          )}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-5 right-5 cursor-pointer hover:text-blue-600 transition-all duration-300"
          >
            {" "}
            <IoMdClose size={24} />{" "}
          </button>

          {navlinks}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
