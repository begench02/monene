import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from './budget/budget.reducer'
import factReducer from './fact/fact.reducer'
import surveyReducer from './survey/survey.reducer'

export const store = configureStore({
	reducer: {
		survey: surveyReducer,
		budget: budgetReducer,
		fact: factReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
