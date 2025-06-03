import type { Genre } from "../entities/Genre";
import APIClient, { type FetchResponse } from "../services/api-client";

export default new APIClient<FetchResponse<Genre>>("/genres");
