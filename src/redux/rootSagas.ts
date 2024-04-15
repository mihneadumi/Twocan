import { all, fork } from 'redux-saga/effects'
import watchGetPosts, { watchGetUsers } from './sagas'

const rootSaga = function* () {
  yield all([
    fork(watchGetPosts),
    fork(watchGetUsers)
    // other watchers go here
  ])
}

export default rootSaga
