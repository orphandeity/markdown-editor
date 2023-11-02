import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

interface ThemeState {
  darkMode: boolean
}

const initialState: ThemeState = {
  darkMode: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export const { toggleDarkMode } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.darkMode

export default themeSlice.reducer
