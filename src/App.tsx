
import { FC } from "react";

import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./config";

const App:FC = () => {
  const routes = createBrowserRouter(routesConfig)

  return (
      <RouterProvider router={routes} />
  );
}

export default App;
