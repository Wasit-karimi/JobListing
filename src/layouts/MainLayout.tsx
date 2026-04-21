import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <main className="w-full px-20 py-10 mx-auto ">
        <Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default MainLayout