import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.set(".fall", { y: -100, opacity: 0 });
    gsap.set(".fade", { opacity: 0 });
    gsap.set(".rise", { y: 100, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(".fall", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    });

    tl.to(".fade", {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
    }, "-=0.5");

    tl.to(".rise", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    }, "<");
  }, []);
  return (
    <section className="w-full h-100 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl capitalize fall">
        Find your next job faster
      </h1>
      <p className="my-2 fade">
        Browse thousands of oppurtunities in tech, design, and more
      </p>
      <button
        onClick={() => navigate("/jobs")}
        className="bg-linear-to-r from-white to-blue-400 flex gap-1
         justify-center items-center px-2 py-1 rounded  cursor-pointer hover:shadow-md hover:shadow-blue-300 transition-all duration-300 rise"
      >
        Explore Jobs <LuArrowRight />
      </button>
    </section>
  );
};

export default Home;
