import { BudgetIncomesGroup } from './budget-incomes-group/budget-incomes-group'
import { convertToRuble } from 'utils/index'
import { Squircle } from 'corner-smoothing'
import { useAppSelector } from 'hooks/redux.hook'
import styles from './budget-incomes.module.sass'

export const BudgetIncomes = () => {
	const budget = useAppSelector((state) => state.budgetIncomes)
	const { monthPrice, yearPrice, groups } = budget

	return (
		<div className={styles.income}>
			<div className={styles.income_header}>
				<div className={styles.income_header_title}>
					<h3>Доходы</h3>
					<Squircle className={styles.income_header_month} cornerRadius={8}>
						{convertToRuble(monthPrice, 'month')}
					</Squircle>
				</div>
				<div className={styles.income_header_subtitle}>
					<div></div>
					<Squircle className={styles.income_header_year} cornerRadius={5}>
						{convertToRuble(yearPrice, 'year')}
					</Squircle>
				</div>
			</div>
			{groups.map((group) => (
				<BudgetIncomesGroup key={group.id} group={group} />
			))}
		</div>
	)
}
