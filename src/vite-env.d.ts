/// <reference types="vite/client" />

// Define the env variables for the project
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_TIMEOUT?: string;
  readonly VITE_API_MOCK_ENABLE?: string;
}

// Define the env object for the project
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
