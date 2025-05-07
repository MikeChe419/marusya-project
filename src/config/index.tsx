import React from "react";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home.page";
import GenresPage from "../pages/genres.page";
import Layout from "../components/Layout";

import { RouteEnum } from "./constants";

export const routesConfig: RouteObject[] = [
    {
        path:RouteEnum.root,
        element: <Layout />,
        children: [
            {
                path:RouteEnum.home,
                element: <HomePage />
            },
            {
                path:RouteEnum.genres,
                element: <GenresPage />
            }
        ]
    },
    
]