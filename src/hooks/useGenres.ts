import type { Genre } from "../services/genre-service";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "./constants";
import genreData from "../data/genre";
import genreService from "../services/genre-service";
import ms from "ms";
import type { FetchResponse } from "../services/api-client";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.get,
    staleTime: ms("24h"), //24h
    initialData: { count: genreData.length, results: genreData },
  });
};

export default useGenres;
