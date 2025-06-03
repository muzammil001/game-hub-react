import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "./constants";
import platformData from "../data/platforms";
import platformService, { type Platform } from "../services/platform-service";
import ms from "ms";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: ms("24h"), //24h
    initialData: { count: platformData.length, results: platformData },
  });
};

export default usePlatforms;
