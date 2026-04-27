import { useLoaderData, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const JobDetails = () => {
  const navigate = useNavigate();

  const job = useLoaderData();

  if (!job) return <NotFound />;

  return (
    <div>
      <h1 className="font-bold text-lg flex flex-col gap-5">{job.title}</h1>
      <p>{job.descriptionBreakdown.oneSentenceJobSummary}</p>
      <p><strong>Type : </strong>{job.descriptionBreakdown.employmentType}</p>
      <p><strong>Work Model : </strong>{job.descriptionBreakdown.workModel}</p>
      <p><strong>Salary : </strong> ${job.descriptionBreakdown.salaryRangeMinYearly} - ${job.descriptionBreakdown.salaryRangeMaxYearly} per year</p>
      <p><strong>Location : </strong>{job.locationAddress}</p>
      <button className="btn-primary"><a href={job.url} target="_blank">Apply</a></button>
      <br />
      <button onClick={() => navigate("/jobs")} className="btn-primary">Jobs</button>
    </div>
  );
};

export default JobDetails;
