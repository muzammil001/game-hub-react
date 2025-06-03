import { useQuery } from "@tanstack/react-query";
import type { Trailer } from "../entities/GameTrailer";
import APIClient, { type FetchResponse } from "../services/api-client";
import ms from "ms";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<FetchResponse<Trailer>>(
    `/games/${gameId}/movies`
  );
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });
};

export default useTrailers;
