import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index.ts'

interface AppState {
  menu: boolean
  preview: boolean
  darkMode: boolean
}

const initialState: AppState = {
  menu: false,
  preview: false,
  darkMode: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menu = !state.menu
    },
    togglePreview: (state) => {
      state.preview = !state.preview
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export const { toggleMenu, togglePreview, toggleDarkMode } = appSlice.actions

export const selectMenu = (state: RootState) => state.app.menu
export const selectPreview = (state: RootState) => state.app.preview
export const selectTheme = (state: RootState) => state.app.darkMode

export default appSlice.reducer
