import type { Game } from "../entities/Game";
import APIClient, { type FetchResponse } from "../services/api-client";

export default new APIClient<FetchResponse<Game>>("/games");
