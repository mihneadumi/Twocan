import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import DetailedView from '../views/DetailedView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/:id',
    element: <DetailedView />
  }
])

export default router
