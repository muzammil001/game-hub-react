import APIClient, { type FetchResponse } from "../services/api-client";
import type { Platform } from "./platform-service";

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default new APIClient<FetchResponse<Game>>("/games");
export type { Game, Platform };
