import type { FetchGenreResponse } from "../services/genre-service";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "./constants";
import apiClient from "../services/api-client";
import genreData from "../data/genre";

const useGenres = () => {
  const fetchGenres = () =>
    apiClient.get<FetchGenreResponse>("/xgenres").then((res) => res.data);
  return useQuery<FetchGenreResponse, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genreData.length, results: genreData },
  });
  //useData<Genre>("/genres");
};

export default useGenres;
