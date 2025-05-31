import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import { type FetchResponse } from "../services/api-client";
import type { Game } from "../services/game-service";
import gameService from "../services/game-service";

const useGames = (gameQuery: GameQuery | null) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gameService.get({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
