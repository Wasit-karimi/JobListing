import { useQuery } from "@tanstack/react-query";
import { jobsQuery } from "../api/jobs";
import { Link } from "react-router-dom";
import type { Job } from "../types/types";

const Home = () => {
  const { data } = useQuery(jobsQuery);

  const jobs = data?.map((job: Job) => (
          <li className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300 my-2 bg-gray-300 rounded-md p-2 w-full text-center">
            <Link to={`/jobs/${job._id}`} key={job.title}>
              {job.title}
            </Link>
          </li>
        ))

  return (
    <section className="w-full">
      <div className="px-3 md:mx-auto md:w-[80%]">

        <h1 className="text-center capitalize text-2xl my-4 font-bold shadow-md shadow-blue-300 rounded-md">jobs</h1>

        <p className="my-4 border-b border-gray-400 pb-2">Explore our list of jobs</p>

      <ul className="list-decimal my-5">
        {jobs}
      </ul>
      </div>
    </section>
  );
};

export default Home;
