import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice'
import usersSlice from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
