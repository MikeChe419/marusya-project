import React from "react";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home.page";
import GenresPage from "../pages/genres.page";
import OfficePage from "../pages/office.page";
import Layout from "../components/Layout";

import { RouteEnum } from "./constants";

export const routesConfig: RouteObject[] = [
    {
        path:RouteEnum.root,
        element: <Layout />,
        children: [
            {
                element: <HomePage />,
                children: [
                    {
                        path:RouteEnum.home,
                        element: null
                    },
                    {
                        path:RouteEnum.root,
                        element: null
                    }
                ]
            },
            {
                path:RouteEnum.genres,
                element: <GenresPage />
            },
            {
                path: RouteEnum.office,
                element: <OfficePage/>
            }
        ]
    },
    
]