import { AccountRecovery } from 'pages/auth/account-recovery/account-recovery'
import { AccountRecoverySuccessful } from 'pages/auth/account-recovery/account-recovery-successful/account-recovery-successful'
import { Auth } from 'pages/auth/auth'
import { NewPassword } from 'pages/auth/account-recovery/new-password/new-password'
import { RecoveryCode } from 'pages/auth/account-recovery/recovery-code/recovery-code'
import { SignIn } from 'pages/auth/sign-in/sign-in'
import { SignUp } from 'pages/auth/sing-up/sign-up'
import {
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
    SurveyFinish,
} from 'pages/survey'
import { Navigate, RouteObject } from 'react-router-dom'
import { Survey } from 'pages/survey/survey'

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
            {
                path: '',
                element: <Navigate to='/auth/sign-in' replace />,
            },
        ],
    },
    {
        path: '/account-recovery',
        element: <AccountRecovery />,
        children: [
            {
                path: 'new-password',
                element: <NewPassword />,
            },
            {
                path: 'recovery-code',
                element: <RecoveryCode />,
            },
            {
                path: 'successful',
                element: <AccountRecoverySuccessful />,
            },
        ],
    },
    {
        path: 'survey',
        element: <Survey />,
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
            {
                path: 'finish',
                element: <SurveyFinish />,
            },
        ],
    },
]
