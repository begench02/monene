export type BudgetIncomesInitialState = {
	monthPrice: number
	yearPrice: number
	groups: BudgetIncomesGroup[]
}

export type BudgetIncomesGroup = {
	icon: string
	name: string
	monthPrice: number
	items: BudgetIncomesGroupItem[]
	id: string
}

export type BudgetIncomesGroupItem = {
	name: string
	price: number
	period?: string
	date: string
	id: string
}
