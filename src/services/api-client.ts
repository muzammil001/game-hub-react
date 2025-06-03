import axios, { type AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5a5cdfbcb836461b87405eac7ebb789a",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
  get = (id: number | string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id, config)
      .then((res) => res.data);
  };
}

export default APIClient;
