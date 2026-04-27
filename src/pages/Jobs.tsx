import { useQuery } from "@tanstack/react-query";
import { jobsQuery } from "../api/jobs";
import { Link } from "react-router-dom";
import type { Job } from "../types/types";

const Home = () => {
  const { data } = useQuery(jobsQuery);

  return (
    <div>
      <ul className="list-decimal">
        {data?.map((job: Job) => (
          <li className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300">
            <Link to={`/jobs/${job._id}`} key={job.title}>
              {job.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
