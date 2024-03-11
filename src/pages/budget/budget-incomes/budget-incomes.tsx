import { BudgetIncomesGroup } from './budget-incomes-group/budget-incomes-group'
import { convertToRuble } from 'utils/index'
import { Squircle } from 'corner-smoothing'
import { useAppSelector } from 'hooks/redux.hook'
import clsx from 'clsx'
import styles from './budget-incomes.module.sass'
import { BudgetIncomesMainGroup } from './budget-incomes-main-group/budget-incomes-main-group'

export const BudgetIncomes = () => {
	const budget = useAppSelector((state) => state.budgetIncomes)
	const { monthPrice, yearPrice, main, additional } = budget

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

			<div className={styles.round_border_default}>
				<BudgetIncomesMainGroup key={main.id} group={main} />
			</div>
			<div className={clsx(styles.round_border, styles.round_border_default)}>
				<BudgetIncomesGroup key={additional.id} group={additional} />
			</div>
		</div>
	)
}
