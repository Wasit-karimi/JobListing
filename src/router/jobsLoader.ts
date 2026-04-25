import type { QueryClient } from "@tanstack/react-query"
import { jobsQuery } from "../api/jobs"

export const jobsLoader = (queryClient: QueryClient) => async () => {
    return (
      queryClient.getQueryData(jobsQuery.queryKey) ?? (await queryClient.fetchQuery(jobsQuery))
    )
  }