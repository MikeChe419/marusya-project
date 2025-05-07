
import { FC } from "react";
import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header";
import { routesConfig } from "./config";

const App:FC = () => {
  const routes = createBrowserRouter(routesConfig)

  return (
    
  <Layout>
    <Header/>
    <RouterProvider router={routes} />
      
  </Layout>
  );
}

export default App;
