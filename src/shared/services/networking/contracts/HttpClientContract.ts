export type HttpPrimitive = string | number;

// Base type for network requests
export type HttpRequest = {
  url: string;
  headers?: Record<string, HttpPrimitive>;
};

// The GetRequest type is used to send a GET request to the server
export type GetRequest = HttpRequest & {
  params?: Record<string, HttpPrimitive>;
};

// This interface defines the contract for an HTTP client
// and for this coding-challenge, I need only the GET method
// but, in a real-world scenario, it would include other methods like POST, PUT, DELETE, etc.
export interface HttpClientContract {
  /**
   *  Send a GET request to the server
   *
   * @param request Request to send to the server
   *
   * @returns Promise<T> The response from the server
   */
  get<T>(request: GetRequest): Promise<T>;
}
