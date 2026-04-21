import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'jobs',
                element: <Jobs />
            },
            {
                path: 'Jobs/:id',
                element: <JobDetails />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
