import creditCard from 'assets/auth/credit-card.png'
import MoneyChart from 'assets/auth/money-chart.svg'
import styles from './auth.module.sass'
import { Outlet } from 'react-router-dom'

export const Auth = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<img className={styles.credit_card} src={creditCard} alt='credit card' />
				<MoneyChart className={styles.money_chart} />
				<div className={styles.text_box}>
					<div className={styles.text_one}>Откладывай</div>
					<div className={styles.text_two}>Планируй</div>
					<div className={styles.text_three}>Экономь</div>
					<div className={styles.text_four}>Анализируй</div>
					<div className={styles.text_five}>Откладывай</div>
					<div className={styles.text_six}>Погашай долги</div>
					<div className={styles.text_seven}>Организовывай</div>
				</div>
				<Outlet />
			</div>
		</div>
	)
}
