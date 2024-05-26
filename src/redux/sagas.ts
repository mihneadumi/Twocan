import axios, { AxiosResponse } from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import {
  GET_POSTS,
  getPostsFailureAction,
  getPostsSuccessAction
} from './slices/postsSlice'
import Post from '../interfaces/Post'
import User from '../interfaces/User'
import {
  getUsersFailureAction,
  getUsersSuccessAction
} from './slices/usersSlice'

// Generator function
function* getPostsSaga() {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
    }
  }
  try {
    const response: AxiosResponse<Post[]> = yield axios.get(
      'https://twocanapiserver.azurewebsites.net/twocan/posts',
      config
    )
    yield put(getPostsSuccessAction(response.data))
  } catch (error: unknown) {
    yield put(getPostsFailureAction(error as string))
  }
}

export default function* watchGetPosts() {
  yield takeLatest(GET_POSTS, getPostsSaga)
}

function* getUsersSaga() {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
      }
    }
    const response: AxiosResponse<User[]> = yield axios.get(
      'https://twocanapiserver.azurewebsites.net/twocan/users',
      config
    )
    yield put(getUsersSuccessAction(response.data))
  } catch (error: unknown) {
    yield put(getUsersFailureAction(error as string))
  }
}

export function* watchGetUsers() {
  yield takeLatest('users/getUsersAction', getUsersSaga)
}
