import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

export type ApiQueryOptions<Result, SelectResult = Result> = Omit<
  UseQueryOptions<Result, Error, SelectResult>,
  'queryFn' // queryFn is omitted because it is set at query hook creation
>;

export async function handleApiResult<T = unknown>(promise: Promise<{ data: T }>): Promise<T> {
  try {
    const { data } = await promise;
    return data as any;
  } catch (err: unknown) {
    alert(err);
    throw err;
  }
}

type ApiQueryHook<Params, Result> = <SelectResult = Result>(
  params: Params,
  options?: ApiQueryOptions<Result, SelectResult>,
) => UseQueryResult<SelectResult, Error>;

const buildApiQueryHook = <Params, Result>(
  cacheKey: string | ((params: Params) => QueryKey),
  fetch: (params: Params) => Promise<{ data: Result }>,
): ApiQueryHook<Params, Result> => {
  const useSpecificQuery = <SelectResult = Result>(
    params: Params,
    options?: ApiQueryOptions<Result, SelectResult>,
  ) => {
    return useQuery<Result, Error, SelectResult>(
      options?.queryKey || (typeof cacheKey === 'string' ? [cacheKey, params] : cacheKey(params)),
      () => handleApiResult<Result>(fetch(params)),
      {
        ...options,
        onError(error: Error) {
          if (options?.onError) options.onError(error);
        },
      },
    );
  };

  return useSpecificQuery;
};

export { buildApiQueryHook };
