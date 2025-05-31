import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import apiClient, { type FetchResponse } from "../services/api-client";
import type { Game } from "../services/game-service";

const useGames = (gameQuery: GameQuery | null) => {
  const fetchGames = () =>
    apiClient
      .get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      })
      .then((res) => res.data);
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
