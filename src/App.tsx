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
import { getPosts, loadPosts } from './redux/slices/postsSlice'
import { loadUsers } from './redux/slices/usersSlice'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  dispatch(loadUsers(mockUsers))

  useEffect(() => {
    axios
      .get('https://localhost:7111/twocan/posts')
      .then((response) => {
        dispatch(loadPosts(response.data))
      })
      .catch((error) => {
        console.error('There was an error in the post GET request!', error)
      })
  }, [dispatch])

  useEffect(() => {
    const eventSource = new EventSource(
      'https://localhost:7111/twocan/postStream'
    )
    eventSource.onmessage = () => {
      dispatch(getPosts())
    }

    return () => {
      eventSource.close() // Clean up the event source on unmount
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
        <Route path='/stats' element={<StatsView />} />
        <Route path='/posts' element={<Home />} />
        <Route path='posts/:id' element={<DetailedView />} />
        <Route path='posts/delete/:id' element={<ConfirmDeleteModal />} />
        <Route path='posts/create' element={<CreatePostView />} />
        <Route path='posts/edit/:id' element={<EditPostView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
