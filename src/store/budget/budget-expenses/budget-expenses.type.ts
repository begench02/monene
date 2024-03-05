export type BudgetExpensesInitialState = {
	groups: BudgetExpensesGroup[]
	monthPrice: number
	yearPrice: number
}

export type BudgetExpensesGroup = {
	icon: string
	name: string
	monthPrice: number
	items: BudgetExpensesGroupItem[]
	id: string
}

export type BudgetExpensesGroupItem = {
	name: string
	cheatFrom: string
	price: number
	id: string
} & (
	| {
			isGoal: false
	  }
	| {
			isGoal: true
			savingsTotal: string
			deadline: string
			startDate: string
			savings: string
	  }
)
