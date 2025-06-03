import type { Platform } from "../entities/Platform";
import APIClient, { type FetchResponse } from "../services/api-client";

export default new APIClient<FetchResponse<Platform>>(
  "/platforms/lists/parents"
);
