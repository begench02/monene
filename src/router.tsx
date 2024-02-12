import { AccountRecovered } from 'pages/auth/account-recovery/account-recovered/account-recovered'
import { AccountRecovery } from 'pages/auth/account-recovery/account-recovery'
import { Auth } from 'pages/auth/auth'
import { NewPassword } from 'pages/auth/new-password/new-password'
import { SignIn } from 'pages/auth/sign-in/sign-in'
import { SignUp } from 'pages/auth/sing-up/sign-up'
import { RouteObject } from 'react-router-dom'

export const PagesRouter: RouteObject[] = [
    {
        path: '',
        element: <div>Main page</div>,
    },
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: 'sign-in',
                element: <SignIn />,
            },
            {
                path: 'sign-up',
                element: <SignUp />,
            },
            // {
            //     path: 'account-recovery',
            //     element: <AccountRecovery />,
            // },
            // {
            //     path: 'account-recovery-successful',
            //     element: <AccountRecovered />,
            // },
            // {
            //     path: 'new-password',
            //     element: <NewPassword />,
            // },
        ],
    },
]
