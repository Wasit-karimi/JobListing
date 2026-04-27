import type { QueryClient } from "@tanstack/react-query";
import { jobQuery } from "../api/job";

export const jobLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: {id: string} }) => {
    const { id } = params;
    if (!id) throw new Error("No job exists");

    return (
      queryClient.getQueryData(["job", id]) ??
      (await queryClient.fetchQuery(jobQuery(id)))
    );
  };
