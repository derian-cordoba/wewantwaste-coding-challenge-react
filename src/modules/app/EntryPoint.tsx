// Call the initialization file
import "@/modules/app/utils/initializator";

import { SelectSkip } from "@/modules/select-skip/pages";

// Usually, in this file, you would import the main component of your app,
// routing component that serves as the entry point for your application,
// or any other main component that you want to render.

// For this coding-challenge, we will directly export the SelectSkip component
export function EntryPoint() {
  return <SelectSkip />;
}
