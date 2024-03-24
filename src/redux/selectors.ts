import { RootState } from './store'

export const getPosts = (state: RootState) => state.posts.posts
export const getPostById = (state: RootState, id: number) =>
  state.posts.posts.find((post) => post.id === id)
export const getCurrentPostId = (state: RootState) => state.posts.currentPostId

export const getUsers = (state: RootState) => state.users.users
export const getUserById = (state: RootState, id: number) =>
  state.users.users.find((user) => user.id === id)
