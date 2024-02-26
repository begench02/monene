import { Reducer, useReducer } from 'react'
import { GroupItem } from 'store/budget/budget.types'

const initialGroupItemState: GroupItem = {
    name: '',
    monthlyPayment: '',
    isGoal: false,
    cheatFrom: 'Зарплата',
} || {
    name: '',
    monthlyPayment: '',
    isGoal: true,
    cheatFrom: 'Зарплата',
    deadline: '',
    savings: '',
    savingsTotal: '',
    startDate: '',
}

export type BudgetGroupItemAction =
    | { type: 'change-name'; payload: string }
    | { type: 'change-amount'; payload: string }
    | { type: 'goal' }
    | { type: 'set-monthly-payment'; payload: string }

const budgetGroupItemReducer: Reducer<GroupItem, BudgetGroupItemAction> = (state, action) => {
    switch (action.type) {
        case 'change-name':
            return {
                ...state,
                name: action.payload,
            }
        case 'change-amount':
            return {
                ...state,
                amount: action.payload,
            }
        case 'goal':
            if (state.isGoal) {
                return {
                    ...state,
                    isGoal: false,
                }
            }
            return {
                ...state,
                isGoal: true,
                cheatFrom: '',
                monthlyPayment: '',
                name: '',
                deadline: '',
                savings: '',
                savingsTotal: '',
                startDate: '',
            }
        case 'set-monthly-payment':
            return {
                ...state,
                monthlyPayment: action.payload,
            }
        default:
            return state
    }
}

export const useCreateBudgetGroupItem = () => {
    const [state, dispatch] = useReducer(budgetGroupItemReducer, initialGroupItemState)

    return { state, dispatch }
}
