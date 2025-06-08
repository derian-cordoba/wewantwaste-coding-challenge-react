import { type ApiConfig, apiConfig } from "./api/config";

export type AppEnv = {
  api: ApiConfig;
};

// Define the app environment configuration
export const appEnv = {
  api: apiConfig,
} as const satisfies AppEnv;
