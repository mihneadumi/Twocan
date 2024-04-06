import { all, fork } from 'redux-saga/effects'
import watchGetPosts from './sagas'

const rootSaga = function* () {
  yield all([
    fork(watchGetPosts)
    // Other forks
  ])
}

export default rootSaga
