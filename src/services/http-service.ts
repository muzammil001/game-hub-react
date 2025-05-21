import apiClient from "./api-client.ts";

interface Entity {
  id: number;
}
class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  get<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  create<T>(entity: T) {
    const request = apiClient.post(this.endpoint, entity);
    return { request };
  }

  update<T extends Entity>(entity: T) {
    const request = apiClient.patch(this.endpoint + "/" + entity.id, entity);
    return { request };
  }

  delete(id: number) {
    const request = apiClient.delete(this.endpoint + "/" + id);
    return { request };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
