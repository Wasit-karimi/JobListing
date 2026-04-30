import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { cn } from "../utils/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
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
      <Link to={link.path} onClick={(prev) => setIsOpen(!prev)}>
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
          scrolled
            ? "h-16 bg-white/75 backdrop-blur-lg border-b border-gray-300"
            : "h-18",
        )}
      >
        {" "}
        <a href="#" className="flex">
          <img src="/logo.svg" alt="logo" />
        </a>{" "}
        <ul className="flex gap-5">{navlinks}</ul>
      </nav>

      {/* mobile nav */}
      <nav
        ref={navRef}
        className="md:hidden w-full relative h-18 flex justify-between px-5 border-b border-gray-300 shadow-md shadow-blue-200 mobileNav"
      >
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
            "bg-blue-300 fixed top-0 -right-52 w-52 h-screen flex flex-col justify-center items-center gap-5 transition-all duration-500",
            isOpen ? "right-0" : "-right-52",
          )}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            ref={btnRef}
            className="absolute top-5 left-5 cursor-pointer hover:text-blue-600 transition-all duration-300"
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
