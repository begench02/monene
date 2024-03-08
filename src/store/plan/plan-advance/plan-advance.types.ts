export type PlanInitialState = {
	name: string
	id: string
	earnings: {
		totalPrice: number
		items: PlanEarning[]
	}
	expenses: {
		totalPrice: number
		items: PlanExpense[]
	}
}

export type PlanEarning = {
	name: string
	price: number
	enrollmentDate: string
	id: string
}

export type PlanExpense = {
	name: string
	price: number
	id: string
}
