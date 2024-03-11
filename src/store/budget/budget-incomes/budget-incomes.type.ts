export type BudgetIncomesInitialState = {
	monthPrice: number
	yearPrice: number
	['main']: BudgetIncomesMainGroup
	['additional']: BudgetIncomesGroup
}

export type BudgetIncomesGroup = {
	icon: string
	name: string
	monthPrice: number
	items: BudgetIncomesGroupItem[]
	id: string
}

export type BudgetIncomesMainGroup = {
	icon: string
	name: string
	monthPrice: number
	['salary']: BudgetIncomesMainGroupItem
	['deposit']: BudgetIncomesMainGroupItem
	id: string
}

export type BudgetIncomesGroupItem = {
	name: string
	price: number
	period: string
	date: string
	id: string
}

export type BudgetIncomesMainGroupItem = {
	price: number
	date: string
	id: string
}
