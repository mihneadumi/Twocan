import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import User from '../../interfaces/User'

export interface UsersState {
  users: User[]
  currentUserId: number
  sessionToken?: string
  isLoading: boolean
  error?: string
}

const initialState: UsersState = {
  users: [],
  currentUserId: -1,
  isLoading: true,
  error: ''
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersAction: (state) => {
      state.isLoading = true
      state.error = ''
    },
    getUsersSuccessAction: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
      state.isLoading = false
    },
    getUsersFailureAction: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },
    loadUsersAction: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    addUserAction: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    deleteUserAction: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    updateUserAction: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      )
      state.users[index] = action.payload
    },
    setCurrentUserIdAction: (state, action: PayloadAction<number>) => {
      state.currentUserId = action.payload
    },
    setSessionTokenAction: (state, action: PayloadAction<string>) => {
      state.sessionToken = action.payload
    }
  }
})

export const GET_USERS = 'users/getUsersAction'

// Action creators are generated for each case reducer function
export const {
  getUsersAction,
  getUsersSuccessAction,
  getUsersFailureAction,
  addUserAction,
  loadUsersAction,
  deleteUserAction,
  updateUserAction,
  setCurrentUserIdAction,
  setSessionTokenAction
} = usersSlice.actions

export default usersSlice.reducer
