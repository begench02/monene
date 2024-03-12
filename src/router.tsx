import { AccountRecovery } from 'pages/auth/account-recovery/account-recovery'
import { AccountRecoverySuccessful } from 'pages/auth/account-recovery/account-recovery-successful/account-recovery-successful'
import { Auth } from 'pages/auth/auth'
import { Budget } from 'pages/budget/budget'
import { Fact } from 'pages/fact/fact'
import { MainLayout } from './components/main-layout/main-layout'
import { Navigate, RouteObject } from 'react-router-dom'
import { NewPassword } from 'pages/auth/account-recovery/new-password/new-password'
import { Plan } from 'pages/plan/plan'
import { RecoveryCode } from 'pages/auth/account-recovery/recovery-code/recovery-code'
import { SignIn } from 'pages/auth/sign-in/sign-in'
import { SignUp } from 'pages/auth/sing-up/sign-up'
import { Survey } from 'pages/survey/survey'
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
import { Consultation } from 'pages/consultation/consultation'
import { SuggestSubscription } from 'pages/suggest-subscription/suggest-subscription'
import { Profile } from 'pages/profile/profile'

export const PagesRouter: RouteObject[] = [
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: '/budget/',
				element: <Budget />,
			},
			{
				path: '/plan',
				element: <Plan />,
			},
			{
				path: '/fact',
				element: <Fact />,
			},
			{
				path: '/consultation',
				element: <Consultation />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '',
				element: <Navigate to='/budget' replace />,
			},
		],
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
			{
				path: '',
				element: <Navigate to='recovery-code' replace />,
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
	{
		path: 'suggest-subscription',
		element: <SuggestSubscription />,
	},
]
