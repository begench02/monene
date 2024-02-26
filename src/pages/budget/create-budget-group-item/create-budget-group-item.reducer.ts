import { Reducer, useReducer } from 'react'
import { GroupItem } from 'store/budget/budget.types'

const initialGroupItemState: GroupItem = {
    name: '',
    amount: '',
    isGoal: false,
    cheatFrom: 'Зарплата',
}

type BudgetGroupItemAction =
    | { type: 'change-name'; payload: string }
    | { type: 'change-amount'; payload: string }
    | { type: 'goal' }

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
                deadline: '',
                savings: '',
                savingsTotal: '',
                startDate: '',
            }
        default:
            return state
    }
}

export const useCreateBudgetGroupItem = () => {
    const [state, dispatch] = useReducer(budgetGroupItemReducer, initialGroupItemState)

    return { state, dispatch }
}
