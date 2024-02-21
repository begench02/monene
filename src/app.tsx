import './styles/index.sass'
import { PagesRouter } from './router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const App = () => {
    const router = createBrowserRouter(PagesRouter)

    return <RouterProvider router={router} />
}
