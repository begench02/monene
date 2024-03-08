import { convertToRuble } from 'utils/index'
import { PlanSalaryEarnings } from './plan-salary-earnings/plan-salary-earnings'
import { PlanSalaryExpenses } from './plan-salary-expenses/plan-salary-expenses'
import { Squircle } from 'corner-smoothing'
import styles from './plan-salary.module.sass'

export const PlanSalary = () => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.header_title}>
					<h3>Зарплата</h3>
					<Squircle cornerRadius={10} className={styles.header_title_date}>
						<p>5 февраля</p>
					</Squircle>
				</div>
				<div className={styles.header_subtitle}>
					<p>Разница</p>
					<Squircle cornerRadius={10} className={styles.header_price}>
						{convertToRuble(30_000)}
					</Squircle>
				</div>
			</div>
			<PlanSalaryEarnings />
			<PlanSalaryExpenses />
		</div>
	)
}
