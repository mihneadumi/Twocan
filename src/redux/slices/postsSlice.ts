import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Post from '../../interfaces/Post'

export interface PostsState {
  posts: Post[]
  isLoading: boolean
  error: string
}

const initialState: PostsState = {
  posts: [],
  isLoading: true,
  error: ''
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.isLoading = true
      state.error = ''
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
      state.isLoading = false
    },
    getPostsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },
    loadPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      )
      state.posts[index] = action.payload
    }
  }
})

export const GET_POSTS = `posts/getPosts`

// Action creators are generated for each case reducer function
export const {
  addPost,
  loadPosts,
  deletePost,
  updatePost,
  getPosts,
  getPostsSuccess,
  getPostsFailure
} = postsSlice.actions

export default postsSlice.reducer
