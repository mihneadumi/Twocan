import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Post from '../../interfaces/Post'

export interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
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

// Action creators are generated for each case reducer function
export const { addPost, loadPosts, deletePost, updatePost } = postsSlice.actions

export default postsSlice.reducer
