import { RootState } from './store'

export const getPosts = (state: RootState) => state.ui.posts.posts
export const getPostById = (state: RootState, id: number) =>
  state.ui.posts.posts.find((post) => post.id === id)

export const getUsers = (state: RootState) => state.ui.users.users
export const getUserById = (state: RootState, id: number) =>
  state.ui.users.users.find((user) => user.id === id)

export const getPostsLoading = (state: RootState) => state.ui.posts.isLoading
export const getPostsError = (state: RootState) => !!state.ui.posts.error
export const getPostsIsOnline = (state: RootState) => state.ui.posts.isOnline

export const getPostsPagination = (state: RootState) =>
  state.ui.posts.hasPagination
export const getPostsPerPage = (state: RootState) => state.ui.posts.postsPerPage
