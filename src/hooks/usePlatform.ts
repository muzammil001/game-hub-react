import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "./constants";
import platformData from "../data/platforms";
import type { Platform } from "../services/game-service";

const usePlatforms = () => {
  const fetchPlatforms = () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms/lists/parents")
      .then((res) => res.data);
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platformData.length, results: platformData },
  });
};

export default usePlatforms;
