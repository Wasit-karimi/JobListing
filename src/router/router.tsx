import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import About from "../pages/About";
import { queryClient } from "../lib/queryClient";
import { jobLoader } from "./jobLoader";
import { jobsLoader } from "./jobsLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "jobs",
        element: <Jobs />,
        loader: jobsLoader(queryClient),
        errorElement: <NotFound />,
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
        loader: jobLoader(queryClient),
        errorElement: <NotFound />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
