import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Post from '../../interfaces/Post'

export interface PostsState {
  posts: Post[]
  isOnline: boolean
  isLoading: boolean
  hasPagination: boolean
  postsPerPage: number
  error: string
}

const initialState: PostsState = {
  posts: [],
  isLoading: true,
  isOnline: false,
  hasPagination: false,
  postsPerPage: 4,
  error: ''
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsAction: (state) => {
      state.isLoading = true
      state.error = ''
    },
    getPostsSuccessAction: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
      state.isLoading = false
      state.isOnline = true
    },
    getPostsFailureAction: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },
    loadPostsAction: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
    addPostAction: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
    },
    deletePostAction: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
    updatePostAction: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      )
      state.posts[index] = action.payload
    },
    switchPostsPaginationAction: (state) => {
      state.hasPagination = !state.hasPagination
    },
    setPostsPerPageAction: (state, action: PayloadAction<number>) => {
      state.postsPerPage = action.payload
    },
    setIsOnlineAction: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload
    }
  }
})

export const GET_POSTS = `posts/getPostsAction`

// Action creators are generated for each case reducer function
export const {
  addPostAction,
  loadPostsAction,
  deletePostAction,
  updatePostAction,
  getPostsAction,
  getPostsSuccessAction,
  getPostsFailureAction,
  switchPostsPaginationAction,
  setPostsPerPageAction,
  setIsOnlineAction
} = postsSlice.actions

export default postsSlice.reducer
