import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Group, InitialState } from './budget.types'
import { v4 as uuid } from 'uuid'

const initialState: InitialState = {
    totalAmount: '80 000 ₽/мес',
    groups: [
        {
            icon: '🏠',
            name: 'Жильё',
            id: uuid(),
            totalAmount: '120 000 ₽/мес',
            items: [
                {
                    name: 'Арендую квартиру',
                    cheatFrom: 'Зарплата',
                    amount: '30 000 ₽/мес',
                    isGoal: false,
                },
                {
                    name: 'Продукты',
                    cheatFrom: '50 на 50',
                    amount: '20000 ₽/мес',
                    isGoal: false,
                },
                {
                    name: 'Интернет',
                    cheatFrom: 'Аванс',
                    amount: '20 000 ₽/мес',
                    isGoal: false,
                },
            ],
        },
        {
            icon: '🏝',
            name: 'Путешествия',
            id: uuid(),
            totalAmount: '3 000 ₽/мес',
            items: [
                {
                    name: 'Тайланд',
                    cheatFrom: 'Зарплата',
                    amount: '10 000 ₽/мес',
                    isGoal: false,
                },
                {
                    name: 'Отель кошке',
                    cheatFrom: 'Аванс',
                    amount: '5 000 ₽/мес',
                    isGoal: false,
                },
            ],
        },
    ],
}

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addGroup: (state, action: PayloadAction<Omit<Group, 'id'>>) => {
            state.groups.push({ ...action.payload, id: uuid() })
        },
        editGroupItem: (state, action: PayloadAction<{ name: string; icon: string; id: string }>) => {
            const group = state.groups.find((group) => group.id == action.payload.id)
            group.name = action.payload.name
            group.icon = action.payload.icon
        },
        moveGroupToTop: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.groups.findIndex((group) => group.id == action.payload.id)
            state.groups.unshift(state.groups.splice(index, 1)[0])
        },
        moveGroupToBottom: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.groups.findIndex((group) => group.id === action.payload.id)
            state.groups.push(state.groups.splice(index, 1)[0])
        },
        deleteGroup: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.groups.findIndex((group) => group.id === action.payload.id)
            state.groups.splice(index, 1)
        },
    },
})

export const { addGroup, editGroupItem, moveGroupToTop, moveGroupToBottom, deleteGroup } = budgetSlice.actions

export default budgetSlice.reducer
