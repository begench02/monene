import { BudgetExpenses } from './budget-expenses/budget-expenses'
import { BudgetFinancialHealth } from './budget-financial-health/budget-financial-health'
import { BudgetIncomes } from './budget-incomes/budget-incomes'
import styles from './budget.module.sass'

export const Budget = () => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<h2 className={styles.title}>Бюджет</h2>
				<BudgetFinancialHealth />
			</div>
			<div className={styles.content}>
				<BudgetExpenses />
				<BudgetIncomes />
			</div>
		</div>
	)
}
