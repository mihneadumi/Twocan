import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { mockPosts, mockUsers } from './constants/mock_data'
import Home from './views/Home'
import ConfirmDeleteModal from './views/Home/components/ConfirmDeleteModal/ConfirmDeleteModal'
import DetailedView from './views/DetailedView'
import ErrorPage from './views/ErrorPage/ErrorPage'
import CreatePostView from './views/CreatePostView/CreatePostView'
import EditPostView from './views/EditPostView/EditPostView'
import StatsView from './views/StatsView/StatsView'
import { useDispatch } from 'react-redux'
import { loadPosts } from './redux/slices/postsSlice'
import { loadUsers } from './redux/slices/usersSlice'

function App() {
  const dispatch = useDispatch()
  dispatch(loadPosts(mockPosts))
  dispatch(loadUsers(mockUsers))
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
