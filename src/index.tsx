import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss'
import App from "./App";

const renderApp = () => {
    const rootElementId = 'root';
    const rootElement = document.getElementById(rootElementId) as HTMLElement;
  
    if (!rootElement) {
      throw new Error(`Element by id - "${rootElementId}" was not found`);
    }
  
    const root = ReactDOM.createRoot(rootElement);
  
    root.render(
      <React.StrictMode>

          <App />

      </React.StrictMode>,
    );
  };
  
  renderApp();
  