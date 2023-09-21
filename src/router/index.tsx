import { RouteObject } from 'react-router-dom'
import { PATH } from 'constant'
import { AuthLayout, MainLayout } from 'components'
import { Login, Register, Home, Account, Booking} from 'pages'

export const router: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: PATH.account,
                element: <Account />
            },
            {
                path: PATH.booking,
                element: <Booking />
            }
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
                element: <Login />,
            },
            {
                path: PATH.register,
                element: <Register />,
            },
        ],
    },
]
