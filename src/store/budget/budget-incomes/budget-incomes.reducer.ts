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
		budgetIncomesGroupCreate: (state, action: PayloadAction<Omit<BudgetIncomesGroup, 'id'>>) => {
			state.groups.push({ ...action.payload, id: uuid() })
		},
		budgetIncomesGroupDuplicate: (state, action: PayloadAction<{ id: string }>) => {
			const group = state.groups.find((group) => group.id === action.payload.id)
			state.groups.push({ ...group, id: uuid() })
		},
		budgetIncomesGroupMoveUp: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id == action.payload.id)
			state.groups.unshift(state.groups.splice(index, 1)[0])
		},
		budgetIncomesGroupMoveDown: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.id)
			state.groups.push(state.groups.splice(index, 1)[0])
		},
		budgetIncomesGroupDelete: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.id)
			state.groups.splice(index, 1)
		},
		budgetIncomesGroupItemCreate: (
			state,
			action: PayloadAction<{ groupId: string; item: BudgetIncomesGroupItem }>,
		) => {
			const index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const new_item = Object.assign(action.payload.item, { id: uuid() })
			state.groups[index].items.push(new_item)
		},
		budgetIncomesGroupItemEdit: (state, action: PayloadAction<BudgetIncomesGroupItem>) => {
			const index = state.groups.findIndex((group) => group.id == action.payload.id)
			Object.assign(state.groups[index], action.payload)
		},
		budgetIncomesGroupItemDuplicate: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group = state.groups.find((group) => group.id === action.payload.groupId)
			const item = group.items.find((item) => item.id === action.payload.itemId)
			group.items.push({ ...item, id: uuid() })
		},
		budgetIncomesGroupItemMoveUp: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			state.groups[group_index].items.unshift(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetIncomesGroupItemMoveDown: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			state.groups[group_index].items.push(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetIncomesGroupItemDelete: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			state.groups[group_index].items.splice(item_index, 1)
		},
	},
})

export const {
	budgetIncomesGroupCreate,
	budgetIncomesGroupDuplicate,
	budgetIncomesGroupMoveUp,
	budgetIncomesGroupMoveDown,
	budgetIncomesGroupDelete,
	budgetIncomesGroupItemCreate,
	budgetIncomesGroupItemEdit,
	budgetIncomesGroupItemDuplicate,
	budgetIncomesGroupItemMoveUp,
	budgetIncomesGroupItemMoveDown,
	budgetIncomesGroupItemDelete,
} = budgetSlice.actions

export default budgetSlice.reducer
