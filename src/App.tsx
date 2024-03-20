import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { mockPosts } from './constants/mock_data'
import { useState } from 'react'
import Home from './views/Home'
import ConfirmDeleteModal from './views/Home/components/ConfirmDeleteModal/ConfirmDeleteModal'
import DetailedView from './views/DetailedView'
import ErrorPage from './views/ErrorPage/ErrorPage'

function App() {
  const [posts, setPosts] = useState(mockPosts)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home posts={posts} />}
          errorElement={<ErrorPage />}
        />
        <Route path='/posts' element={<Home posts={posts} />} />
        <Route
          path='posts/delete/:id'
          element={<ConfirmDeleteModal posts={posts} setPosts={setPosts} />}
        />
        <Route path='posts/:id' element={<DetailedView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
