import { ConsultationItem } from './consultation.types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ConsultationItem[] = [
	{
		name: 'Консультация №1',
		status: 'Оплачено',
		date: 'Будет после консультации',
		recommendation: 'lorem',
	},
	{
		name: 'Консультация №2',
		status: 'Оплачено',
		date: '2 февраля, 2024',
		recommendation: 'lorem',
	},
	{
		name: 'Консультация №3',
		status: 'Оплачено',
		date: '9 января, 2024',
		recommendation: 'lorem',
	},
	{
		name: 'Консультация №4',
		status: 'Оплачено',
		date: '4 января, 2024',
		recommendation: 'lorem',
	},
	{
		name: 'Консультация №5',
		status: 'Отменено',
		date: '5 декабря, 2023',
		recommendation: 'lorem',
	},
]

export const consultationSlice = createSlice({
	name: 'consultation',
	initialState,
	reducers: {}
})

export default consultationSlice.reducer