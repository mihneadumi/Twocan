import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice'
import usersSlice from './slices/usersSlice'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
