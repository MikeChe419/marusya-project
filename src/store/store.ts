import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { profileReducer } from "./profileSlice";
export const store = configureStore({
    reducer: {
        profileState: profileReducer,
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),

    devTools: true,
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;