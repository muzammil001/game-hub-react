import type { GameQuery } from "../App";
import type { Game } from "../services/game-service";
import useData from "./useData";

const useGames = (gameQuery: GameQuery | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
