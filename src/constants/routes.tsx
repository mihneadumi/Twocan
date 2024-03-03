import { createBrowserRouter } from 'react-router-dom'
import { DetailedView } from '../views/DetailedView'
import Home from '../views/Home'

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
