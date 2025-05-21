import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import gameService, {
  type FetchGamesResponse,
  type Game,
} from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const { request, cancel } = gameService.get<FetchGamesResponse>();
    request
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => cancel();
  }, []);

  return { games, error };
};

export default useGames;
