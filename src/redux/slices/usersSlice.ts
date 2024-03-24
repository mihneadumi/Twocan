import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import User from '../../interfaces/User'

export interface UsersState {
  users: User[]
  currentUserId: number
}

const initialState: UsersState = {
  users: [],
  currentUserId: 0
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
      const ids = state.users.map((user) => user.id)
      state.currentUserId = Math.max(...ids)
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
      state.currentUserId = action.payload.id
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      )
      state.users[index] = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUser, loadUsers, deleteUser, updateUser } = usersSlice.actions

export default usersSlice.reducer
