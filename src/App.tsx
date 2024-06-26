import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import ConfirmDeleteModal from './views/Home/components/ConfirmDeleteModal/ConfirmDeleteModal'
import DetailedView from './views/DetailedView'
import ErrorPage from './views/ErrorPage/ErrorPage'
import CreatePostView from './views/CreatePostView/CreatePostView'
import EditPostView from './views/EditPostView/EditPostView'
import StatsView from './views/StatsView/StatsView'
import { useDispatch } from 'react-redux'
import {
  getPostsAction,
  getPostsFailureAction,
  setIsOnlineAction
} from './redux/slices/postsSlice'
import { getUsersAction } from './redux/slices/usersSlice'
import { useEffect } from 'react'
import AdminView from './views/AdminView/AdminView'
import UserProfileView from './views/UserProfileView/UserProfileView'
import CreateUserView from './views/CreateUserView/CreateUserView'
import Login from './views/Login/Login'
import Register from './views/RegisterView/Register'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const eventSource = new EventSource(
      'https://twocanapiserver.azurewebsites.net/twocan/postStream'
    )
    eventSource.onmessage = () => {
      try {
        dispatch(getPostsAction())
        dispatch(getUsersAction())
      } catch (error) {
        console.error('Error occurred with SSE:', error)
      }
    }

    eventSource.onerror = (error) => {
      console.error('Error occurred with SSE:', error)
      dispatch(getPostsFailureAction(error.toString()))
    }

    return () => {
      eventSource.close()
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getPostsAction())
    dispatch(getUsersAction())
  }, [dispatch])

  useEffect(() => {
    const isOnlineSetter = () => dispatch(setIsOnlineAction(navigator.onLine))
    const interval = setInterval(isOnlineSetter, 6000) // call the function name only not with function with call `()`
    return () => {
      clearInterval(interval) // for component unmount stop the interval
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} errorElement={<ErrorPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/posts' element={<Home />} />
        <Route path='/stats' element={<StatsView />} />
        <Route path='/admin' element={<AdminView />} />
        <Route path='posts/:id' element={<DetailedView />} />
        <Route path='posts/delete/:id' element={<ConfirmDeleteModal />} />
        <Route path='posts/create' element={<CreatePostView />} />
        <Route path='posts/edit/:id' element={<EditPostView />} />
        <Route path='users/:id' element={<UserProfileView />} />
        <Route path='users/create' element={<CreateUserView />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
