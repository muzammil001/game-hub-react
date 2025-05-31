import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import { type FetchResponse } from "../services/api-client";
import type { Game } from "../services/game-service";
import gameService from "../services/game-service";

const useGames = (gameQuery: GameQuery | null) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.get({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1, //THIS LINE HERE!
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
