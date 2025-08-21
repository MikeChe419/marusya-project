import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { moviesReducer, moviesSlice } from "./moviesSlice";
export const store = configureStore({
    reducer: {
        moviesState: moviesReducer,
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),

    devTools: true,
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;