import { useLoaderData, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const JobDetails = () => {
  const navigate = useNavigate();

  const job = useLoaderData();

  if (!job) return <NotFound />;

  return (
    <div>
      <h1 className="font-bold text-lg flex flex-col gap-5">{job.title}</h1>
      <p>{job.descriptionBreakdown.oneSentnceJobSummary}</p>
      <button onClick={() => navigate(`${job.url}`)}>Apply</button><br />
      <button onClick={() => navigate("/jobs")}>Jobs</button>
    </div>
  );
};

export default JobDetails;
