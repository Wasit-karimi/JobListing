import { useLoaderData, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import type { Job } from "../types/types";

const JobDetails = () => {
  const navigate = useNavigate();

  const job: Job = useLoaderData();
  console.log(job);

  if (!job) return <NotFound />;

  return (
    <div className="w-full md:w-[90%] lg:w-[50%] shadow-md hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 rounded-md cursor-pointer ">
      <div className="px-3 py-1 border border-gray-300 hover:border-blue-300 transition-all duration-300 rounded-md">
        <h1 className="font-bold text-lg mx-auto text-center my-2">
          {job.title}
        </h1>
        {/* 
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
        {job.descriptionBreakdown.workModel && (
          <p>
            <strong>Work Model : </strong>
            {job.descriptionBreakdown.workModel}
          </p>
        )}

        {job.descriptionBreakdown.salaryRangeMinYearly &&
          job.descriptionBreakdown.salaryRangeMaxYearly && (
            <p className="my-1">
              <strong>Salary : </strong> $
              {job.descriptionBreakdown.salaryRangeMinYearly} - $
              {job.descriptionBreakdown.salaryRangeMaxYearly} per year
            </p>
          )} */}

        {job.owner.companyName && job.owner.photo && (
          <div className="w-full flex flex-col md:flex-row justify-center items-center max-auto my-2">
            <div className="w-1/2 flex justify-center">
              <h2 className="text-lg "> Company : {job.owner.companyName}</h2>
            </div>
            <div className="w-1/2 p-2 flex justify-center">
              <img
                src={job.owner.photo}
                alt={job.owner.companyName}
                className="w-14 rounded-full"
              />
            </div>
          </div>
        )}

        {job.locationAddress && (
          <p className="mb-1">
            <strong>Location : </strong>
            {job.locationAddress}
          </p>
        )}
        <div className="w-full flex justify-center gap-3 my-2">
          {job.url && (
            <button className="btn-primary">
              <a href={job.url} target="_blank">
                Page
              </a>
            </button>
          )}
          <button onClick={() => navigate("/jobs")} className="btn-primary">
            Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
