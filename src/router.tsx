import { AccountRecovered } from 'pages/auth/account-recovery/account-recovered/account-recovered'
import { AccountRecovery } from 'pages/auth/account-recovery/account-recovery'
import { Auth } from 'pages/auth/auth'
import { NewPassword } from 'pages/auth/new-password/new-password'
import { SignIn } from 'pages/auth/sign-in/sign-in'
import { SignUp } from 'pages/auth/sing-up/sign-up'
import {
    StepEight,
    StepEleven,
    StepFive,
    StepFour,
    StepNine,
    StepOne,
    StepSeven,
    StepSix,
    StepTen,
    StepThree,
    StepTwo,
} from 'pages/survey'
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
    {
        path: 'account-recovery',
        element: <AccountRecovery />,
    },
    {
        path: 'account-recovery-successful',
        element: <AccountRecovered />,
    },
    {
        path: 'new-password',
        element: <NewPassword />,
    },
    {
        path: 'survey',
        children: [
            {
                path: 'step-one',
                element: <StepOne />,
            },
            {
                path: 'step-two',
                element: <StepTwo />,
            },
            {
                path: 'step-three',
                element: <StepThree />,
            },
            {
                path: 'step-four',
                element: <StepFour />,
            },
            {
                path: 'step-five',
                element: <StepFive />,
            },
            {
                path: 'step-six',
                element: <StepSix />,
            },
            {
                path: 'step-seven',
                element: <StepSeven />,
            },
            {
                path: 'step-eight',
                element: <StepEight />,
            },
            {
                path: 'step-nine',
                element: <StepNine />,
            },
            {
                path: 'step-ten',
                element: <StepTen />,
            },
            {
                path: 'step-eleven',
                element: <StepEleven />,
            },
        ],
    },
]
