import { useLoaderData, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const JobDetails = () => {
  const navigate = useNavigate();

  const job = useLoaderData();
  console.log(job);

  if (!job) return <NotFound />;

  return (
    <div className="w-full lg:w-[50%] md:w-[90%] shadow-md hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 rounded-md cursor-pointer ">
      <div className="px-3 py-1 border border-gray-300 hover:border-blue-300 transition-all duration-300 rounded-md">
        <h1 className="font-bold text-lg mx-auto text-center my-2">
          {job.title}
        </h1>

        {job.descriptionBreakdown.oneSentenceJobSummary && (
          <p className="text-justify">
            {job.descriptionBreakdown.oneSentenceJobSummary}
          </p>
        )}
        {job.descriptionBreakdown.employmentType && (
          <p className="my-1">
            <strong>Type : </strong>
            {job.descriptionBreakdown.employmentType}
          </p>
        )}
        <p>
          <strong>Work Model : </strong>
          {job.descriptionBreakdown.workModel}
        </p>
        <p className="my-1">
          <strong>Salary : </strong> $
          {job.descriptionBreakdown.salaryRangeMinYearly} - $
          {job.descriptionBreakdown.salaryRangeMaxYearly} per year
        </p>
        <p className="mb-1">
          <strong>Location : </strong>
          {job.locationAddress}
        </p>
        <div className="w-full flex justify-center gap-3 my-2">
          <button className="btn-primary">
            <a href={job.url} target="_blank">
              Page
            </a>
          </button>
          <button onClick={() => navigate("/jobs")} className="btn-primary">
            Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
