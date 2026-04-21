import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const NotFound = () => {


    const navigate = useNavigate()

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold">404 | Not Found</h1>
      <button onClick={() => navigate("/")}> <LuArrowLeft /> Go Home </button>
    </div>
  );
};

export default NotFound;
