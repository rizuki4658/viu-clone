import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '@/store/index'

export interface MoviesState {
  home: any
}

const initialState: MoviesState = {
  home: {}
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMoviesHome: (state, action) => state.home = action.payload
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.movies
    })
  }
})

export const { setMoviesHome } = moviesSlice.actions

export const selectAuthState = (state: AppState) => state.movies

export default moviesSlice.reducer
