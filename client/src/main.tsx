import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import CriticalCSSLoader from "./components/CriticalCSSLoader";
import "./index.css";

// Create container for the app
const container = document.getElementById("root");
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

// Render the application with performance optimizations
root.render(
  <StrictMode>
    <CriticalCSSLoader />
    <App />
  </StrictMode>
);
