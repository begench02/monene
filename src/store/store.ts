import { configureStore } from '@reduxjs/toolkit'
import budgetIncomesReducer from './budget/budget-incomes/budget-incomes.reducer'
import budgetExpensesReducer from './budget/budget-expenses/budget-expenses.reducer'
import consultationReducer from './consultation/consultation.reducer'
import factReducer from './fact/fact.reducer'
import surveyReducer from './survey/survey.reducer'

export const store = configureStore({
	reducer: {
		survey: surveyReducer,
		budgetExpenses: budgetExpensesReducer,
		budgetIncomes: budgetIncomesReducer,
		fact: factReducer,
		consultation: consultationReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
