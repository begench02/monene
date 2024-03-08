import { convertToRuble } from 'utils/index'
import { PlanAdvanceEarnings } from './plan-advance-earnings/plan-advance-earnings'
import { PlanAdvanceExpenses } from './plan-advance-expenses/plan-advance-expenses'
import { Squircle } from 'corner-smoothing'
import styles from './plan-advance.module.sass'

export const PlanAdvance = () => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.header_title}>
					<h3>Аванс</h3>
					<Squircle cornerRadius={10} className={styles.header_title_date}>
						<p>20 февраля</p>
					</Squircle>
				</div>
				<div className={styles.header_subtitle}>
					<p>Разница</p>
					<Squircle cornerRadius={10} className={styles.header_price}>
						{convertToRuble(30_000)}
					</Squircle>
				</div>
			</div>
			<PlanAdvanceEarnings />
			<PlanAdvanceExpenses />
		</div>
	)
}
