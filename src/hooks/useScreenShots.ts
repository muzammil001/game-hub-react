import { useQuery } from "@tanstack/react-query";
import type { ScreenShot } from "../entities/ScreenShot";
import APIClient, { type FetchResponse } from "../services/api-client";
import ms from "ms";
const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<FetchResponse<ScreenShot>>(
    `/games/${gameId}/screenshots`
  );
  return useQuery<FetchResponse<ScreenShot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });
};
export default useScreenShots;
