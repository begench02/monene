export type InitialState = {
    groups: Group[]
    totalAmount: string
}

export type Group = {
    icon: string
    id: string
    items: GroupItem[]
    name: string
    totalAmount: string
}

export type GroupItem = {
    name: string
    monthlyPayment: string
    cheatFrom: string
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
