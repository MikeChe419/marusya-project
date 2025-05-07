
import { FC } from "react";
import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { routesConfig } from "./config";

const App:FC = () => {
  const routes = createBrowserRouter(routesConfig)

  return (
    <RouterProvider router={routes} />

  );
}

export default App;
