import type { QueryClient } from "@tanstack/react-query";
import { jobQuery } from "../api/job";

export const jobLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: {_id: string} }) => {
    const { _id } = params;
    if (!_id) throw new Error("No job exists");

    return (
      queryClient.getQueryData(["job", _id]) ??
      (await queryClient.fetchQuery(jobQuery(_id)))
    );
  };
