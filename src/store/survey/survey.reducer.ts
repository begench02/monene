import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    Additional,
    FinancialStatus,
    Goal,
    HasDebt,
    LivingPlace,
    RegularExpense,
    SpendingOn,
    Subscription,
    Transportation,
} from './survey.types'

type InitialState = {
    name: string
    financialStatus: FinancialStatus | undefined
    spendingOn: SpendingOn[]
    livingPlace: LivingPlace | undefined
    hasDebts: HasDebt[]
    transportation: Transportation | undefined
    regularExpenses: RegularExpense[]
    subscriptions: Subscription[]
    goals: Goal[]
    additional: Additional[]
}

const initialState: InitialState = {
    name: '',
    financialStatus: undefined,
    spendingOn: [],
    livingPlace: undefined,
    hasDebts: [],
    transportation: undefined,
    regularExpenses: [],
    subscriptions: [],
    goals: [],
    additional: [],
}

export const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        clearName: (state) => {
            state.name = ''
        },
        setFinancialStatus: (state, action: PayloadAction<FinancialStatus>) => {
            state.financialStatus = action.payload
        },
        setSpendingOn: (state, action: PayloadAction<SpendingOn>) => {
            let element_index = state.spendingOn.indexOf(action.payload)
            if (element_index > -1) {
                state.spendingOn.splice(element_index, 1)
            } else {
                state.spendingOn.push(action.payload)
            }
        },
        setLivingPlace: (state, action: PayloadAction<LivingPlace>) => {
            state.livingPlace = action.payload
        },
        setHasDebts: (state, action: PayloadAction<HasDebt>) => {
            let element_index = state.hasDebts.indexOf(action.payload)
            if (element_index > -1) {
                state.hasDebts.splice(element_index, 1)
            } else {
                state.hasDebts.push(action.payload)
            }
        },
        setTransportation: (state, action: PayloadAction<Transportation>) => {
            state.transportation = action.payload
        },
        setRegularExpenses: (state, action: PayloadAction<RegularExpense>) => {
            let element_index = state.regularExpenses.indexOf(action.payload)
            if (element_index > -1) {
                state.regularExpenses.splice(element_index, 1)
            } else {
                state.regularExpenses.push(action.payload)
            }
        },
        setSubscriptions: (state, action: PayloadAction<Subscription>) => {
            let element_index = state.subscriptions.indexOf(action.payload)
            if (element_index > -1) {
                state.subscriptions.splice(element_index, 1)
            } else {
                state.subscriptions.push(action.payload)
            }
        },
        setGoals: (state, action: PayloadAction<Goal>) => {
            let element_index = state.goals.indexOf(action.payload)
            if (element_index > -1) {
                state.goals.splice(element_index, 1)
            } else {
                state.goals.push(action.payload)
            }
        },
        setAdditional: (state, action: PayloadAction<Additional>) => {
            let element_index = state.additional.indexOf(action.payload)
            if (element_index > -1) {
                state.additional.splice(element_index, 1)
            } else {
                state.additional.push(action.payload)
            }
        },
    },
})

export const {
    setName,
    clearName,
    setFinancialStatus,
    setSpendingOn,
    setLivingPlace,
    setHasDebts,
    setTransportation,
    setRegularExpenses,
    setSubscriptions,
    setGoals,
    setAdditional,
} = surveySlice.actions

export default surveySlice.reducer
