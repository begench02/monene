import { Reducer, useReducer } from 'react'
import { BudgetExpensesGroupItem } from 'store/budget/budget-expenses/budget-expenses.type'

const initialGroupItemState: BudgetExpensesGroupItem = {
	name: '',
	price: 0,
	isGoal: false,
	cheatFrom: 'Зарплата',
	id: '',
} || {
	name: '',
	price: 0,
	isGoal: true,
	cheatFrom: 'Зарплата',
	deadline: '',
	savings: '',
	savingsTotal: '',
	startDate: '',
	id: '',
}

export type BudgetGroupItemAction =
	| { type: 'change-name'; payload: string }
	| { type: 'change-amount'; payload: string }
	| { type: 'goal' }
	| { type: 'set-monthly-payment'; payload: string }

const budgetGroupItemReducer: Reducer<BudgetExpensesGroupItem, BudgetGroupItemAction> = (state, action) => {
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
