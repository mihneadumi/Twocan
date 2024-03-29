import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Post from '../../interfaces/Post'

export interface PostsState {
  posts: Post[]
  currentPostId: number
}

const initialState: PostsState = {
  posts: [],
  currentPostId: 0
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
      const ids = state.posts.map((post) => post.id)
      state.currentPostId = Math.max(...ids)
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
      state.currentPostId = action.payload.id
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

// Action creators are generated for each case reducer function
export const { addPost, loadPosts, deletePost, updatePost } = postsSlice.actions

export default postsSlice.reducer
