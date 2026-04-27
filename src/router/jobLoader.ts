import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router-dom";
import { jobsQuery } from "../api/jobs";
import type { Job } from "../types/types";

export const jobLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;
    if (!id) throw new Error("No job exists");

    
    const data = queryClient.getQueryData(jobsQuery.queryKey) ??
      (await queryClient.fetchQuery(jobsQuery));

      const job = data.find((job: Job) => job._id === id)
    
      return job
  };
