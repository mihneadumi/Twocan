import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import DetailedView from '../views/DetailedView'
import ErrorPage from '../views/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/users',
    element: <Home />
  },
  {
    path: 'users/:id',
    element: <DetailedView />
  }
])

export default router
