import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";
const rootElementId = 'root';
const rootElement = document.getElementById(rootElementId) as HTMLElement | null;

if (!rootElement) {
    throw new Error(`Element by id - "${rootElementId}" was not found`);
  }

  const root = createRoot(rootElement);
  
  root.render(
      <React.StrictMode>
          <App></App>
      </React.StrictMode>
  );
    
