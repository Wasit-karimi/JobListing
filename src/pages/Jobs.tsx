import { useQuery } from "@tanstack/react-query";
import { jobsQuery } from "../api/jobs";
import { Link } from "react-router-dom";
import type { Job } from "../types/types";

const Home = () => {
  const { data } = useQuery(jobsQuery);

  return (
    <div>
      {data?.map((job: Job) => (
        <Link to={`/jobs/${job._id}`} key={job.title}>
          {job.title}
        </Link>
      ))}
    </div>
  );
};

export default Home;
