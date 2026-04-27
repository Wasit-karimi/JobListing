import { fetchJobs } from "../api/jobs";
import type { Job } from "../types/types";

export const getJobById = async (id: string) => {
  const res = await fetchJobs();

  if(!res) return null

  return res.find((job: Job) => job._id === id);
};
