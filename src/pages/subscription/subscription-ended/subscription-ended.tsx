import { Button } from 'components/button/button'
import GlassChart from 'assets/glass-chart.svg'
import GlassPipe from 'assets/glass-pipe.svg'
import styles from './subscription-ended.module.sass'

export const SubscriptionEnded = () => {
	return (
		<div className={styles.main}>
			<GlassChart className={styles.glass_chart} />
			<GlassPipe className={styles.glass_pipe} />
			<h2 className={styles.title}>
				Ваш пробный
				<br /> период закончился!
			</h2>
			<div className={styles.price}>1299 ₽/мес</div>
			<div className={styles.details}>
				Для продолжения использования всех функций данного сервиса вам необходимо подключить платную подписку
				«Monene Plus»
			</div>
			<Button text='Оплатить' style={{ width: '320px', fontSize: '18px', marginBottom: '30px' }} />
			<div className={styles.free_plan}>Перейти на бесплатный тариф</div>
		</div>
	)
}
