import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-bold text-red-500">404 | Not Found</h1>
      <button onClick={() => navigate("/jobs")} className="flex  justify-center items-center gap-2 bg-linear-to-r from-white to-red-500 px-5 py-2 rounded cursor-pointer hover:shadow-md hover:shadow-red-300 transition-all duration-200">
        {" "}
        <LuArrowLeft size={17} className="text-red-500 font-bold" /> Go to Jobs{" "}
      </button>
    </div>
  );
};

export default NotFound;
