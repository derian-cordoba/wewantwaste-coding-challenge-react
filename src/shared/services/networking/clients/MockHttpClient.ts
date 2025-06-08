import type {
  GetRequest,
  HttpClientContract,
} from "@/shared/services/networking/contracts/HttpClientContract";

export class MockHttpClient implements HttpClientContract {
  private readonly baseURL: string;

  constructor(baseURL?: string) {
    this.baseURL = baseURL || "../mocks";
  }

  async get<T>(request: GetRequest): Promise<T> {
    // For this coding-challenge, I will skip the headers and params
    // also, I will assume that the request.url is a valid path to a JSON file
    const formattedURL = this.formatURL(request.url);

    // I will ignore the warning message for testing purposes in this coding-challenge
    // more information: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    const { default: data } = await import(
      /* @vite-ignore */ `${this.baseURL}/${formattedURL}.json`
    );
    return data;
  }

  /**
   * Formats the URL by removing the leading slash if it exists.
   *
   * @param url The URL to format.
   * @returns The formatted URL.
   */
  private formatURL(url: string): string {
    // Remove the leading slash if it exists
    // e.g. "/path/to/resource" becomes "path/to/resource"
    return !url.startsWith("/") ? url : url.substring(1);
  }
}
