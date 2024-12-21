import { api } from "@/lib/api";
import { QueryConfig } from "@/lib/query";
import { queryOptions, useQuery } from "@tanstack/react-query";


type Example = {
  username: string;
};

export const getExamples = (): Promise<{
  data: Example[];
}> => {
  return api.get(`/example`);
};

export const getExamplesQueryOptions = () => {
  return queryOptions({
    queryKey: ["example"],
    queryFn: getExamples,
  });
};

type UseExamplesOptions = {
  queryConfig?: QueryConfig<typeof getExamplesQueryOptions>;
};

export const useExamples = ({ queryConfig }: UseExamplesOptions = {}) => {
  return useQuery({
    ...getExamplesQueryOptions(),
    ...queryConfig,
  });
};