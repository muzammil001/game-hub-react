import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import gameService, {
  type FetchGamesResponse,
  type Game,
} from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.get<FetchGamesResponse>();
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return { games, error, isloading: isLoading };
};

export default useGames;
