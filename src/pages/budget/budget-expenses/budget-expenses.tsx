import { BudgetExpensesGroup } from './budget-expenses-group/budget-expenses-group'
import { BudgetExpensesGroupCreate } from './budget-expenses-group/budget-expenses-group-create/budget-expenses-group-create'
import { convertToRuble } from 'utils/index'
import { Squircle } from 'corner-smoothing'
import { useAppSelector } from 'hooks/redux.hook'
import { useState } from 'react'
import AddCircle from 'assets/add-circle.svg'
import styles from './budget-expenses.module.sass'
import { BudgetExpensesGroupItemSettings } from './budget-expenses-group/budget-expenses-group-item/budget-expenses-group-item-settings/budget-expenses-group-item-settings'

export const BudgetExpenses = () => {
	const budget = useAppSelector((state) => state.budgetExpenses)
	const { monthPrice, yearPrice, groups } = budget
	const [isGroupCreateMenuOpen, setGroupCreateMenuOpen] = useState(false)

	return (
		<div className={styles.income}>
			<div className={styles.income_header}>
				<div className={styles.income_header_title}>
					<h3>Расходы</h3>
					<Squircle className={styles.income_header_month} cornerRadius={8}>
						{convertToRuble(monthPrice, 'month')}
					</Squircle>
				</div>
				<div className={styles.income_header_subtitle}>
					<div onClick={() => setGroupCreateMenuOpen(true)}>
						Создать группу <AddCircle className={styles.add_circle} />
					</div>
					<Squircle className={styles.income_header_year} cornerRadius={5}>
						{convertToRuble(yearPrice, 'year')}
					</Squircle>
				</div>
			</div>
			{isGroupCreateMenuOpen && <BudgetExpensesGroupCreate close={() => setGroupCreateMenuOpen(false)} />}
			{groups.map((group) => (
				<BudgetExpensesGroup key={group.id} group={group} />
			))}
		</div>
	)
}
