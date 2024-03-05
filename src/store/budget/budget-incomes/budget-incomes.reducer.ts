import { BudgetIncomesGroup, BudgetIncomesGroupItem, BudgetIncomesInitialState } from './budget-incomes.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState: BudgetIncomesInitialState = {
	monthPrice: 100_000,
	yearPrice: 1_600_000,
	groups: [
		{
			icon: '💰',
			name: 'Основные',
			monthPrice: 120_000,
			id: uuid(),
			items: [
				{
					name: 'Зарплата',
					date: '5 числа',
					price: 30_000,
					id: uuid(),
				},
				{
					name: 'Продукты',
					date: '20 числа',
					price: 20_000,
					id: uuid(),
				},
			],
		},
		{
			icon: '💸',
			name: 'Дополнительные',
			monthPrice: 3_000,
			id: uuid(),
			items: [
				{
					name: 'Сдаю квартиру',
					price: 30_000,
					period: 'Каждый мес',
					date: '5 числа',
					id: uuid(),
				},
				{
					name: 'Премия',
					price: 5_000,
					period: 'Каждые 2 мес',
					date: '27 число',
					id: uuid(),
				},
			],
		},
	],
}

export const budgetSlice = createSlice({
	name: 'budget-incomes',
	initialState,
	reducers: {
		budgetIncomeGroupCreate: (state, action: PayloadAction<Omit<BudgetIncomesGroup, 'id'>>) => {
			state.groups.push({ ...action.payload, id: uuid() })
		},
		budgetIncomeGroupMoveUp: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id == action.payload.id)
			state.groups.unshift(state.groups.splice(index, 1)[0])
		},
		budgetIncomeGroupMoveDown: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.id)
			state.groups.push(state.groups.splice(index, 1)[0])
		},
		budgetIncomeGroupDelete: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.id)
			state.groups.splice(index, 1)
		},
		budgetIncomeGroupItemCreate: (state, action: PayloadAction<{ group_id: string; item: BudgetIncomesGroupItem }>) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.group_id)
			const new_item = Object.assign(action.payload.item, { id: uuid() })
			state.groups[index].items.push(new_item)
		},
		budgetIncomeGroupItemEdit: (state, action: PayloadAction<BudgetIncomesGroupItem>) => {
			const index = state.groups.findIndex((group) => group.id == action.payload.id)
			Object.assign(state.groups[index], action.payload)
		},
		budgetIncomeGroupItemMoveUp: (state, action: PayloadAction<{ id: string; name: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.id)
			const item_index = state.groups[group_index].items.findIndex((item) => item.name === action.payload.name)
			state.groups[group_index].items.unshift(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetIncomeGroupItemMoveDown: (state, action: PayloadAction<{ id: string; name: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.id)
			const item_index = state.groups[group_index].items.findIndex((item) => item.name === action.payload.name)
			state.groups[group_index].items.push(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetIncomeGroupItemDelete: (state, action: PayloadAction<{ groupId: string; name: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.name === action.payload.name)
			state.groups[group_index].items.splice(item_index, 1)
		},
	},
})

export const {
	budgetIncomeGroupCreate,
	budgetIncomeGroupMoveUp,
	budgetIncomeGroupMoveDown,
	budgetIncomeGroupDelete,
	budgetIncomeGroupItemCreate,
	budgetIncomeGroupItemEdit,
	budgetIncomeGroupItemMoveUp,
	budgetIncomeGroupItemMoveDown,
	budgetIncomeGroupItemDelete,
} = budgetSlice.actions

export default budgetSlice.reducer
