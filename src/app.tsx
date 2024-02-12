import './styles/index.sass'
import { Auth } from './pages/auth/auth'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PagesRouter } from './router'

export const App = () => {
    const router = createBrowserRouter(PagesRouter)

    return <RouterProvider router={router} />
}
