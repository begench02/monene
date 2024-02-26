import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Group, GroupItem, InitialState } from './budget.types'
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
                    monthlyPayment: '30 000 ₽/мес',
                    isGoal: false,
                },
                {
                    name: 'Продукты',
                    cheatFrom: '50 на 50',
                    monthlyPayment: '20000 ₽/мес',
                    isGoal: false,
                },
                {
                    name: 'Интернет',
                    cheatFrom: 'Аванс',
                    monthlyPayment: '20 000 ₽/мес',
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
                    monthlyPayment: '10 000 ₽/мес',
                    isGoal: false,
                },
                {
                    name: 'Отель кошке',
                    cheatFrom: 'Аванс',
                    monthlyPayment: '5 000 ₽/мес',
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
        moveGroupUp: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.groups.findIndex((group) => group.id == action.payload.id)
            state.groups.unshift(state.groups.splice(index, 1)[0])
        },
        moveGroupDown: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.groups.findIndex((group) => group.id === action.payload.id)
            state.groups.push(state.groups.splice(index, 1)[0])
        },
        deleteGroup: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.groups.findIndex((group) => group.id === action.payload.id)
            state.groups.splice(index, 1)
        },
        moveGroupItemUp: (state, action: PayloadAction<{ id: string; name: string }>) => {
            const group_index = state.groups.findIndex((group) => group.id === action.payload.id)
            const item_index = state.groups[group_index].items.findIndex((item) => item.name === action.payload.name)
            state.groups[group_index].items.unshift(state.groups[group_index].items.splice(item_index, 1)[0])
        },
        moveGroupItemDown: (state, action: PayloadAction<{ id: string; name: string }>) => {
            const group_index = state.groups.findIndex((group) => group.id === action.payload.id)
            const item_index = state.groups[group_index].items.findIndex((item) => item.name === action.payload.name)
            state.groups[group_index].items.push(state.groups[group_index].items.splice(item_index, 1)[0])
        },
        deleteGroupItem: (state, action: PayloadAction<{ groupId: string; name: string }>) => {
            const group_index = state.groups.findIndex((group) => group.id === action.payload.groupId)
            const item_index = state.groups[group_index].items.findIndex((item) => item.name === action.payload.name)
            state.groups[group_index].items.splice(item_index, 1)
        },
        createGroupItem: (state, action: PayloadAction<{ groupId: string; groupItem: GroupItem }>) => {
            state.groups.find((group) => group.id === action.payload.groupId).items.push(action.payload.groupItem)
        },
    },
})

export const {
    addGroup,
    editGroupItem,
    moveGroupUp,
    moveGroupDown,
    deleteGroup,
    moveGroupItemUp,
    moveGroupItemDown,
    deleteGroupItem,
    createGroupItem,
} = budgetSlice.actions

export default budgetSlice.reducer
