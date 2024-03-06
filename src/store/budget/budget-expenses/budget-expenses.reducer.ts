import { BudgetExpensesGroup, BudgetExpensesGroupItem, BudgetExpensesInitialState } from './budget-expenses.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState: BudgetExpensesInitialState = {
	monthPrice: 100_000,
	yearPrice: 1_600_000,
	groups: [
		{
			icon: '🏠',
			name: 'Жилье',
			monthPrice: 120_000,
			id: uuid(),
			items: [
				{
					name: 'Арендую квартиру',
					cheatFrom: 'Зарплата',
					price: 30_000,
					isGoal: false,
					id: uuid(),
				},
				{
					name: 'Продукты',
					cheatFrom: '50 на 50',
					price: 20_000,
					isGoal: false,
					id: uuid(),
				},
				{
					name: 'Интернет',
					cheatFrom: 'Аванс',
					price: 20_000,
					isGoal: false,
					id: uuid(),
				},
			],
		},
		{
			icon: '🏝',
			name: 'Путешествия',
			id: uuid(),
			monthPrice: 3_000,
			items: [
				{
					name: 'Тайланд',
					cheatFrom: 'Зарплата',
					price: 10_000,
					isGoal: false,
					id: uuid(),
				},
				{
					name: 'Отель кошке',
					cheatFrom: 'Аванс',
					price: 5_000,
					isGoal: false,
					id: uuid(),
				},
			],
		},
	],
}

export const budgetSlice = createSlice({
	name: 'budget-expenses',
	initialState,
	reducers: {
		budgetExpensesGroupCreate: (state, action: PayloadAction<Omit<BudgetExpensesGroup, 'id'>>) => {
			state.groups.push({ ...action.payload, id: uuid() })
		},
		budgetExpensesGroupEdit: (state, action: PayloadAction<{ name: string; icon: string; id: string }>) => {
			const group = state.groups.find((group) => group.id == action.payload.id)
			group.name = action.payload.name
			group.icon = action.payload.icon
		},
		budgetExpensesGroupDuplicate: (state, action: PayloadAction<{ id: string }>) => {
			const group = state.groups.find((group) => group.id === action.payload.id)
			state.groups.push({ ...group, id: uuid() })
		},
		budgetExpensesGroupMoveUp: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id == action.payload.id)
			state.groups.unshift(state.groups.splice(index, 1)[0])
		},
		budgetExpensesGroupMoveDown: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.id)
			state.groups.push(state.groups.splice(index, 1)[0])
		},
		budgetExpensesGroupDelete: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.id)
			state.groups.splice(index, 1)
		},
		budgetExpensesGroupItemCreate: (
			state,
			action: PayloadAction<{ groupId: string; item: BudgetExpensesGroupItem }>,
		) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const new_item = Object.assign(action.payload.item, { id: uuid() })
			state.groups[index].items.push(new_item)
		},
		budgetExpensesGroupItemEdit: (
			state,
			action: PayloadAction<{ groupId: string; item: BudgetExpensesGroupItem }>,
		) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.item.id)
			state.groups[group_index].items[item_index] = action.payload.item
		},
		budgetExpensesGroupItemDuplicate: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group = state.groups.find((group) => group.id === action.payload.groupId)
			const item = group.items.find((item) => item.id === action.payload.itemId)
			group.items.push({ ...item, id: uuid() })
		},
		budgetExpensesGroupItemMoveUp: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			state.groups[group_index].items.unshift(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetExpensesGroupItemMoveDown: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			state.groups[group_index].items.push(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetExpensesGroupItemDelete: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			state.groups[group_index].items.splice(item_index, 1)
		},
	},
})

export const {
	budgetExpensesGroupCreate,
	budgetExpensesGroupEdit,
	budgetExpensesGroupDuplicate,
	budgetExpensesGroupMoveUp,
	budgetExpensesGroupMoveDown,
	budgetExpensesGroupDelete,
	budgetExpensesGroupItemCreate,
	budgetExpensesGroupItemEdit,
	budgetExpensesGroupItemDuplicate,
	budgetExpensesGroupItemMoveUp,
	budgetExpensesGroupItemMoveDown,
	budgetExpensesGroupItemDelete,
} = budgetSlice.actions

export default budgetSlice.reducer
