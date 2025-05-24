import type { Game } from "../services/game-service";
import type { Genre } from "../services/genre-service";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
