import  { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import { moviesSlice } from '@/store/slices/movies'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () => (
  configureStore({
    reducer: {
      // [moviesSlice.name]: moviesSlice.reducer
    },
    devTools: true
  })
)

export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<AppStore["getState"]>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
