import APIClient, { type FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new APIClient<FetchResponse<Platform>>(
  "/platforms/lists/parents"
);
export type { Platform };
