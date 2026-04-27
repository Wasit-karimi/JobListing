export const jobQuery = (id: string) => ({
  queryKey: ["job", id],
  queryFn: async () => {
    const res = await fetch("https://api.joinrise.io/api/v1/jobs/public");

    if (!res.ok) throw new Error("Failed to fetch job");

    const data = await res.json();
    return data.result.jobs[id];
  },
});
