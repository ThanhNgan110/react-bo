import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthData } from '../services'

type initialUser = {
  users: AuthData | null
  loading: boolean
}

const initialState: initialUser = {
  users: null,
  loading: false,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthData>) => {
      state.users = action.payload
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setAuth, setLoading } = userSlice.actions
export default userSlice.reducer
