import { PlanSalary } from './salary/plan-salary'
import { Squircle } from 'corner-smoothing'
import More from 'assets/more-blue.svg'
import styles from './plan.module.sass'
import { PlanAdvance } from './advance/plan-advance'

export const Plan = () => {
	return (
		<div>
			<div className={styles.header}>
				<div className={styles.header_title}>План</div>
				<div>Date</div>
				<Squircle className={styles.acc_diff} cornerRadius={30}>
					<Squircle className={styles.acc_diff_budget} cornerRadius={10}>
						2 150 000 ₽
					</Squircle>
					<div>
						<div className={styles.title}>Накопительная разница</div>
						<div className={styles.date}>с декабря 2023</div>
					</div>
					<More className={styles.more} />
				</Squircle>
			</div>
			<div className={styles.content}>
				<PlanSalary />
				<PlanAdvance />
			</div>
		</div>
	)
}
