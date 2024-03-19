import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileInitialState } from './profile.types'

export const initialState: ProfileInitialState = {
	name: 'Андрей Кабушев',
	id: '2894723487',
	email: 'tuvvi@ya.ru',
	phone: '+7 (999) 800-50-10',
	photo: '',
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		profileChangeName: (state, action: PayloadAction<{ name: string }>) => {
			state.name = action.payload.name
		},
		profileChangeInfo: (state, action: PayloadAction<{ email: string; phone: string }>) => {
			state.email = action.payload.email
			state.phone = action.payload.phone
		},
	},
})

export const { profileChangeName, profileChangeInfo } = profileSlice.actions

export default profileSlice.reducer
