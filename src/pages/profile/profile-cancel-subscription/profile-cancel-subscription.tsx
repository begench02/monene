import styles from './profile-cancel-subscription.module.sass'
import Close from 'assets/close.svg'
import { Squircle } from 'corner-smoothing'

export const ProfileCancelSubscription = () => {
	return (
		<div className={styles.main}>
			<Close className={styles.close} />
			<h2 className={styles.title}>
				Вы хотите отменить<br /> подписку <span>Monene Plus?</span>
			</h2>
			<p className={styles.subtitle}>
				Ваш тарифный план приостановится, <br /> а деньги нельзя будет вернуть обратно
			</p>
			<Squircle cornerRadius={10} className={styles.btn}>
				Отменить подписку
			</Squircle>
			<p className={styles.go_back}>Вернуться назад</p>
		</div>
	)
}
