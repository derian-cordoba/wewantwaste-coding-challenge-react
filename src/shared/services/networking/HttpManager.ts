import type {
  GetRequest,
  HttpClientContract,
} from "@/shared/services/networking/contracts/HttpClientContract";
import { AxiosHttpClient } from "@/shared/services/networking/clients/AxiosHttpClient";
import { MockHttpClient } from "@/shared/services/networking/clients/MockHttpClient";
import { appEnv } from "@/shared/config/app-env";

export type HttpManagerParams = {
  baseURL?: string;
  httpClient?: HttpClientContract;
};

export class HttpManager {
  private readonly httpClient: HttpClientContract;

  constructor(params?: HttpManagerParams) {
    this.httpClient =
      params?.httpClient || this.defaultHttpClient(params?.baseURL);
  }

  /**
   *  Send a GET request to the server
   *
   * @param request Request to send to the server
   *
   * @returns Promise<T> The response from the server
   */
  async get<T>(request: GetRequest): Promise<T> {
    const reponse = await this.httpClient.get<T>(request);
    return reponse;
  }

  /**
   * Get the default HTTP client instance based on the environment
   *
   * @returns {HttpClientContract} The default HTTP client instance
   */
  private defaultHttpClient(baseURL?: string): HttpClientContract {
    // Configure the default HTTP client based on the environment
    return appEnv.api.mock.enable
      ? new MockHttpClient(baseURL)
      : new AxiosHttpClient(baseURL);
  }
}

// Create and export a singleton instance of HttpManager
export const httpManager = new HttpManager();
