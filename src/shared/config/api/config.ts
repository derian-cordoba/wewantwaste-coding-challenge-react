const {
  VITE_API_URL,
  VITE_API_TIMEOUT = "10000",
  VITE_API_MOCK_ENABLE = "false",
} = import.meta.env;

export type ApiConfig = {
  url: string;
  timeout: number;
  headers?: Record<string, string>;
  mock: {
    enable: boolean;
  };
};

export const apiConfig = {
  url: VITE_API_URL,
  timeout: Number(VITE_API_TIMEOUT),
  headers: {
    "Content-Type": "application/json",
  },
  mock: {
    enable: VITE_API_MOCK_ENABLE === "true",
  },
} as const satisfies ApiConfig;
