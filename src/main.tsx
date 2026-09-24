import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  );
}
