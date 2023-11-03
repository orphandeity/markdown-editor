import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app/appSlice'
import markdownReducer from './markdown/markdownSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    markdown: markdownReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
