import React from "react";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/home.page";
import GenresPage from "../pages/genres.page";

import { RouteEnum } from "./constants";

export const routesConfig: RouteObject[] = [
    {
        path:RouteEnum.root,
        element: <HomePage />
    },
    {
        path:RouteEnum.genres,
        element: <GenresPage />
    }
]