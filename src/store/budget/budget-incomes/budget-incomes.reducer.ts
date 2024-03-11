import {
	BudgetIncomesGroup,
	BudgetIncomesGroupItem,
	BudgetIncomesInitialState,
	BudgetIncomesMainGroupItem,
} from './budget-incomes.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState: BudgetIncomesInitialState = {
	monthPrice: 100_000,
	yearPrice: 1_600_000,
	main: {
		icon: '💰',
		name: 'Основные',
		monthPrice: 120_000,
		id: uuid(),
		salary: {
			date: '5 числа',
			price: 30_000,
			id: uuid(),
		},
		deposit: {
			date: '20 числа',
			price: 20_000,
			id: uuid(),
		},
	},
	additional: {
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
}

export const budgetSlice = createSlice({
	name: 'budget-incomes',
	initialState,
	reducers: {
		budgetIncomesGroupMainCreate: (
			state,
			action: PayloadAction<{ groupId: string; item: BudgetIncomesGroupItem }>,
		) => {
			// const index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			// const new_item = Object.assign(action.payload.item, { id: uuid() })
			// state.groups[index].items.push(new_item)
		},
		budgetIncomesMainGroupSalaryEdit: (state, action: PayloadAction<BudgetIncomesMainGroupItem>) => {
			state.main.salary = action.payload
		},
		budgetIncomesMainGroupDepositEdit: (state, action: PayloadAction<BudgetIncomesMainGroupItem>) => {
			state.main.deposit = action.payload
		},
		budgetIncomesMainGroupSalaryReset: (state) => {
			state.main.salary.price = 0
		},
		budgetIncomesMainGroupDepositReset: (state) => {
			state.main.deposit.price = 0
		},
		budgetIncomesAdditionalGroupItemCreate: (state, action: PayloadAction<BudgetIncomesGroupItem>) => {
			state.additional.items.push({ ...action.payload, id: uuid() })
		},
		budgetIncomesAdditionalGroupItemEdit: (state, action: PayloadAction<BudgetIncomesGroupItem>) => {
			const item_index = state.additional.items.findIndex((item) => item.id === action.payload.id)
			state.additional.items[item_index] = action.payload
		},
		budgetIncomesGroupItemDuplicate: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			// const group = state.groups.find((group) => group.id === action.payload.groupId)
			// const item = group.items.find((item) => item.id === action.payload.itemId)
			// group.items.push({ ...item, id: uuid() })
		},
		budgetIncomesGroupItemMoveUp: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			// const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			// const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			// state.groups[group_index].items.unshift(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetIncomesGroupItemMoveDown: (state, action: PayloadAction<{ groupId: string; itemId: string }>) => {
			// const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
			// const item_index = state.groups[group_index].items.findIndex((item) => item.id === action.payload.itemId)
			// state.groups[group_index].items.push(state.groups[group_index].items.splice(item_index, 1)[0])
		},
		budgetIncomesAdditionalGroupItemDelete: (state, action: PayloadAction<{ itemId: string }>) => {
			const item_index = state.additional.items.findIndex((item) => item.id === action.payload.itemId)
			state.additional.items.splice(item_index, 1)
		},
	},
})

export const {
	budgetIncomesMainGroupSalaryEdit,
	budgetIncomesMainGroupDepositEdit,
	budgetIncomesMainGroupSalaryReset,
	budgetIncomesMainGroupDepositReset,
	budgetIncomesAdditionalGroupItemCreate,
	budgetIncomesGroupItemDuplicate,
	budgetIncomesAdditionalGroupItemEdit,
	budgetIncomesGroupItemMoveUp,
	budgetIncomesGroupItemMoveDown,
	budgetIncomesAdditionalGroupItemDelete,
} = budgetSlice.actions

export default budgetSlice.reducer
