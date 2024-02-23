export type InitialState = {
    totalAmount: string
    groups: Group[]
}

export type Group = {
    name: string
    icon: string
    totalAmount: string
    items: GroupItem[]
}

export type GroupItem = {
    name: string
    cheatFrom: string
    amount: string
    isGoal?: false | undefined
}
