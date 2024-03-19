import { configureStore } from '@reduxjs/toolkit'
import budgetExpensesReducer from './budget/budget-expenses/budget-expenses.reducer'
import budgetIncomesReducer from './budget/budget-incomes/budget-incomes.reducer'
import consultationReducer from './consultation/consultation.reducer'
import factReducer from './fact/fact.reducer'
import planAdvanceReducer from './plan/plan-advance/plan-advance.reducer'
import planSalaryReducer from './plan/plan-salary/plan-salary.reducer'
import profileReducer from './profile/profile.reducer'
import surveyReducer from './survey/survey.reducer'

export const store = configureStore({
	reducer: {
		survey: surveyReducer,
		budgetExpenses: budgetExpensesReducer,
		budgetIncomes: budgetIncomesReducer,
		planSalary: planSalaryReducer,
		planAdvance: planAdvanceReducer,
		fact: factReducer,
		consultation: consultationReducer,
		profile: profileReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
