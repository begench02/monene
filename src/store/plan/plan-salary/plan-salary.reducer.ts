import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { PlanEarning, PlanExpense, PlanInitialState } from './plan-salary.types'

const initialState: PlanInitialState = {
	name: 'Зарплата',
	id: uuid(),
	earnings: {
		totalPrice: 30_000,
		items: [
			{
				name: 'Зарплата',
				price: 30000,
				enrollmentDate: '01.01.2010',
				id: uuid(),
			},
			{
				name: 'Сдаю квартиру',
				price: 30000,
				enrollmentDate: '01.01.2010',
				id: uuid(),
			},
			{
				name: 'Донат',
				price: 30000,
				enrollmentDate: '01.01.2010',
				id: uuid(),
			},
		],
	},
	expenses: {
		totalPrice: 3_000,
		items: [
			{
				name: 'Расход №1',
				price: 30_000,
				id: uuid(),
			},
			{
				name: 'Расход №2',
				price: 30_000,
				id: uuid(),
			},
			{
				name: 'Расход №3',
				price: 30_000,
				id: uuid(),
			},
			{
				name: 'Расход №4',
				price: 30_000,
				id: uuid(),
			},
			{
				name: 'Расход №5',
				price: 30_000,
				id: uuid(),
			},
		],
	},
}

export const planSalarySlice = createSlice({
	name: 'plan-salary',
	initialState,
	reducers: {
		planSalaryEarningCreate: (state, action: PayloadAction<{ item: PlanEarning }>) => {
			state.earnings.items.push({...action.payload.item, id: uuid()})
		},
		planSalaryExpenseCreate: (state, action: PayloadAction<{ item: PlanExpense }>) => {
			state.expenses.items.push({...action.payload.item, id: uuid() })
		},
		planSalaryEarningEdit: (state, action: PayloadAction<{ item: PlanEarning }>) => {
			const index = state.earnings.items.findIndex((item) => item.id === action.payload.item.id)
			state.earnings.items[index] = action.payload.item
		},
		planSalaryExpenseEdit: (state, action: PayloadAction<{ item: PlanExpense }>) => {
			const index = state.expenses.items.findIndex((item) => item.id === action.payload.item.id)
			state.expenses.items[index] = action.payload.item
		},
		planSalaryEarningDelete: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.earnings.items.findIndex((earning) => earning.id === action.payload.id)
			state.earnings.items.splice(index, 1)
		},
		planSalaryExpenseDelete: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.expenses.items.findIndex((expense) => expense.id === action.payload.id)
			state.expenses.items.splice(index, 1)
		},
	},
})

export const {
	planSalaryEarningCreate,
	planSalaryExpenseCreate,
	planSalaryEarningEdit,
	planSalaryExpenseEdit,
	planSalaryEarningDelete,
	planSalaryExpenseDelete,
} = planSalarySlice.actions
export default planSalarySlice.reducer
