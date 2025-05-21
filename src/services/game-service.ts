import create from "./http-service";
interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export default create("/games");
export type { Game, FetchGamesResponse };
