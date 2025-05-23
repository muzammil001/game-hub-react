import create from "./http-service";
interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default create("/games");
export type { Game, FetchGamesResponse, Platform };
