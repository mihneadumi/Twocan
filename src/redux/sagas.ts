import axios, { AxiosResponse } from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import {
  GET_POSTS,
  getPostsFailure,
  getPostsSuccess
} from './slices/postsSlice'
import Post from '../interfaces/Post'

// Generator function
function* getPostsSaga() {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<Post[]> = yield axios.get(
      'https://localhost:7111/twocan/posts'
    )
    yield put(getPostsSuccess(response.data))
  } catch (error: unknown) {
    yield put(getPostsFailure(error as string))
  }
}

export default function* watchGetPosts() {
  yield takeLatest(GET_POSTS, getPostsSaga)
}
