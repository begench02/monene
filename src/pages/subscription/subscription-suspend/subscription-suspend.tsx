import { Button } from 'components/button/button'
import styles from './subscription-suspend.module.sass'

export const SubscriptionSuspend = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>
				У вас приостановлена подписка <span className={styles.plus}>Monene Plus</span>
			</h1>
			<div className={styles.subtitle}>
				С вашей карты невозможно снять абоненскую плату в размере <span className={styles.price}>1299₽</span>.
				Работа сервиса будет приостановлена.
			</div>
			<Button
				style={{ marginBottom: '30px', padding: '24px 0', fontSize: '18px', fontWeight: '700' }}
				text='Привязать карту'
			/>
			<div className={styles.cancel}>Отключить подписку</div>
		</div>
	)
}
