import { AccountRecovery } from 'pages/auth/acсount-recovery/account-recovery'
import { Auth } from 'pages/auth/auth'
import { Navigate, RouteObject } from 'react-router-dom'
import { NewPassword } from 'pages/auth/new-password/new-password'
import { SignIn } from 'pages/auth/sign-in/sign-in'
import { SignUp } from 'pages/auth/sing-up/sign-up'

export const PagesRouter: RouteObject[] = [
    {
        path: '',
        element: <div>Main page</div>,
    },
    {
        path: '/auth',
        children: [
            {
                path: 'sign-in',
                element: <Auth />
            },
            {
                path: 'sign-up',
                element: <SignUp />,
            },
            {
                path: 'account-recovery',
                element: <AccountRecovery />,
            },
            {
                path: 'new-password',
                element: <NewPassword />,
            },
        ],
    },
]
