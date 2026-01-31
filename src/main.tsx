import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TechStack from "./components/TechStack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TechStack />
  </StrictMode>,
);
