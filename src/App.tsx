import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { mockUsers } from './constants/mock_data'
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
import { loadUsers } from './redux/slices/usersSlice'
import { useEffect } from 'react'
import AdminView from './views/AdminView/AdminView'

function App() {
  const dispatch = useDispatch()
  dispatch(loadUsers(mockUsers))

  useEffect(() => {
    const eventSource = new EventSource(
      'https://localhost:7111/twocan/postStream'
    )
    eventSource.onmessage = () => {
      try {
        dispatch(getPostsAction())
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
    const isOnlineSetter = () => dispatch(setIsOnlineAction(navigator.onLine))
    const interval = setInterval(isOnlineSetter, 6000) // call the function name only not with function with call `()`
    return () => {
      clearInterval(interval) // for component unmount stop the interval
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
        <Route path='/posts' element={<Home />} />
        <Route path='/stats' element={<StatsView />} />
        <Route path='/admin' element={<AdminView />} />
        <Route path='posts/:id' element={<DetailedView />} />
        <Route path='posts/delete/:id' element={<ConfirmDeleteModal />} />
        <Route path='posts/create' element={<CreatePostView />} />
        <Route path='posts/edit/:id' element={<EditPostView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
