import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../src/redux/userSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
})

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch
