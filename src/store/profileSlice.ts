import { createSlice,  PayloadAction} from "@reduxjs/toolkit"
import { ProfileStateType } from "./types"

export const profileSlice = createSlice({
    name: 'profile',
    initialState: null,
    reducers: {
        setProfile: (
            state: ProfileStateType | null,
            action:PayloadAction<ProfileStateType | null>
        ) => {
            state = action.payload
        }
    }
}) 

export const {
    setProfile
} = profileSlice.actions

export const profileReducer = profileSlice.reducer