import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "./constants";
import platformData from "../data/platforms";
import platformService, { type Platform } from "../services/platform-service";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.get,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platformData.length, results: platformData },
  });
};

export default usePlatforms;
