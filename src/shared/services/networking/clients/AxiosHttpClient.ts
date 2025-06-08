import axios, { type AxiosInstance } from "axios";
import type {
  GetRequest,
  HttpClientContract,
} from "@/shared/services/networking/contracts/HttpClientContract";
import { appEnv } from "@/shared/config/app-env";

export class AxiosHttpClient implements HttpClientContract {
  private readonly request: AxiosInstance;

  constructor(baseURL?: string, headers?: Record<string, string>) {
    this.request = axios.create({
      baseURL: baseURL || appEnv.api.url,
      timeout: appEnv.api.timeout,

      // Set the default headers for the request
      headers: {
        ...appEnv.api.headers,
        ...headers,
      },
    });
  }

  async get<T>(request: GetRequest): Promise<T> {
    const { data } = await this.request.get<T>(request.url, {
      params: request.params,
      headers: request.headers,
    });
    return data;
  }
}
