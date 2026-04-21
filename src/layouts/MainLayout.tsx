import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <Navbar />
      <section className="w-full h-full px-30  mx-auto flex flex-col justify-between items-center">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
