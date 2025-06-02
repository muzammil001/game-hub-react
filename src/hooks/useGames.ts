import { useInfiniteQuery } from "@tanstack/react-query";
import { type FetchResponse } from "../services/api-client";
import type { Game } from "../services/game-service";
import gameService from "../services/game-service";
import ms from "ms";
import useGameQueryStore from "../stores/gameQueryStore";

const useGames = () => {
  const gameQuery = useGameQueryStore((x) => x.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.get({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), //24h
  });
};

export default useGames;
