import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AccountItem, FactInitialState } from './fact.types'
import { v4 as uuid } from 'uuid'

const initialState: FactInitialState = {
	accountItems: [
		{
			name: 'Пенсия',
			sum: 4_000,
			id: uuid(),
		},
		{
			name: 'Инвестиции',
			sum: 4_000,
			id: uuid(),
		},
		{
			name: 'Финансовая подушка',
			sum: 4_000,
			id: uuid(),
		},
		{
			name: 'Благотворительность',
			sum: 4_000,
			id: uuid(),
		},
	],
}

export const factSlice = createSlice({
	name: 'fact',
	initialState,
	reducers: {
		addAccountItem: (state, action: PayloadAction<Omit<AccountItem, 'id'>>) => {
			state.accountItems.push({ ...action.payload, id: uuid() })
		},
		editAccountItem: (state, action: PayloadAction<AccountItem>) => {
			const index = state.accountItems.findIndex((accountItem) => accountItem.id === action.payload.id)
			state.accountItems[index] = action.payload
		},
		moveAccountItemUp: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.accountItems.findIndex((accountItem) => accountItem.id === action.payload.id)
			state.accountItems.unshift(state.accountItems.splice(index, 1)[0])
		},
		moveAccountItemDown: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.accountItems.findIndex((group) => group.id === action.payload.id)
			state.accountItems.push(state.accountItems.splice(index, 1)[0])
		},
		deleteAccountItem: (state, action: PayloadAction<{ id: string }>) => {
			const index = state.accountItems.findIndex((group) => group.id === action.payload.id)
			state.accountItems.splice(index, 1)
		},
	},
})

export const { addAccountItem, editAccountItem, moveAccountItemUp, moveAccountItemDown, deleteAccountItem } =
	factSlice.actions
export default factSlice.reducer
