import { createSlice,  PayloadAction} from "@reduxjs/toolkit"
import { ProfileStateType } from "./types";

type profileType = {
    profile:  ProfileStateType | null
}

const initialState: profileType = {
    profile:  null
}

export const profileSlice = createSlice({
    name: '@profile',
     initialState,
    reducers: {
        setProfile: (
            state: profileType,
            action:PayloadAction<ProfileStateType>
        ) => {
            state.profile = action.payload
        }
    }
}) 

export const {
    setProfile
} = profileSlice.actions

export const profileReducer = profileSlice.reducer