import "@/shared/resources/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EntryPoint } from "@/modules/app/EntryPoint";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <EntryPoint />
  </StrictMode>
);
