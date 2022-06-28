import { QueryOptions, useQuery, UseQueryResult } from "react-query";

type UseRequest = (key: string, func: any, options: QueryOptions) => UseQueryResult

export const useRequest: UseRequest = (key, func, options) => useQuery(key, func, {...options})
