import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainNav from './MainNav/MainNav'
import NewChat from '../../pages/NewChat'
import './MainSection.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NewChat />,
    errorElement: <h6>Page not found</h6>
  }
])

const MainSection = () => {
  return (
    <div className="main">
      <MainNav />
      <RouterProvider router={router} />
    </div>
  )
}

export default MainSection
