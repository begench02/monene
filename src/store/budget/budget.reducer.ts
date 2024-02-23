import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Group, InitialState } from './budget.types'

const initialState: InitialState = {
    totalAmount: '80 000 ₽/мес',
    groups: [
        {
            icon: '🏠',
            name: 'Жильё',
            totalAmount: '120 000 ₽/мес',
            items: [
                {
                    name: 'Арендую квартиру',
                    cheatFrom: 'Зарплата',
                    amount: '30 000 ₽/мес',
                },
                {
                    name: 'Продукты',
                    cheatFrom: '50 на 50',
                    amount: '20000 ₽/мес',
                },
                {
                    name: 'Интернет',
                    cheatFrom: 'Аванс',
                    amount: '20 000 ₽/мес',
                },
            ],
        },
        {
            icon: '🏝',
            name: 'Путешествия',
            totalAmount: '3 000 ₽/мес',
            items: [
                {
                    name: 'Тайланд',
                    cheatFrom: 'Зарплата',
                    amount: '10 000 ₽/мес',
                },
                {
                    name: 'Отель кошке',
                    cheatFrom: 'Аванс',
                    amount: '5 000 ₽/мес',
                },
            ],
        },
    ],
}

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addGroup: (state, action: PayloadAction<Group>) => {
            state.groups.push(action.payload)
        },
    },
})

export const { addGroup } = budgetSlice.actions

export default budgetSlice.reducer
