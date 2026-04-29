import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <Navbar />
      <section className="w-[90%] h-full mx-auto flex flex-col justify-between items-center">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
