
export const fetchJobs = async () => {
    const res = await fetch("https://api.joinrise.io/api/v1/jobs/public");
    const data = await res.json()
    return data.result.jobs
}

export const jobsQuery = {
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    staleTime: 1000 * 60 * 60 
}