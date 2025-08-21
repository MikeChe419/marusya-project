import { createSlice,  PayloadAction} from "@reduxjs/toolkit"
import { MoviesListType } from "./types";

type MoviesType = {
    topMoviesList: MoviesListType[],
    randomMovie: MoviesListType | null
    movieList: MoviesListType[]
}

const initialState: MoviesType  = {
    topMoviesList:  [],
    randomMovie: null,
    movieList: []
}

export const moviesSlice = createSlice({
    name: '@profile',
     initialState,
    reducers: {
        setRandomMovie: (
            state: MoviesType,
            action:PayloadAction<MoviesListType>
        ) => {
            state.randomMovie = action.payload
        },

         setTopMoviesList: (
            state: MoviesType,
            action:PayloadAction<MoviesListType[]>
        ) => {
            state.topMoviesList = action.payload
        }
    }
}) 

export const {
    setRandomMovie,
    setTopMoviesList
} = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer