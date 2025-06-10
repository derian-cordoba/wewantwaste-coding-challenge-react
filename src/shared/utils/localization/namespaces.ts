export enum Namespace {
  COMMON = "common",
  FILTER = "filter",
  HEADER = "header",
  SELECT_SKIP = "select-skip",
}

// All namespaces used in the application
// e.g. ["select-skip", "another-namespace-file-name"]
export const namespaces = Object.values(Namespace);
