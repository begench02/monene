import { FC } from 'react'
import { Squircle } from 'corner-smoothing'
import Card from 'assets/master-card.svg'
import Chart from 'assets/chart-2.svg'
import Coin1 from 'assets/coin-1.svg'
import Coin2 from 'assets/coin-2.svg'
import Coin3 from 'assets/coin-3.svg'
import Gear from 'assets/gear.svg'
import styles from './profile-card.module.sass'

export const ProfileCard: FC<Props> = (props) => {
	const { connected } = props

	if (connected) {
		return (
			<div className={styles.connected_main}>
				<div className={styles.connected_header}>
					<h2 className={styles.title}>Monene Plus</h2>
					<div className={styles.status}>Подключено</div>
				</div>
				<div className={styles.next_write_off}>
					Следующее списание 13.03.2024 на сумму <span>1299 ₽</span>
				</div>
				<div className={styles.card}>
					<Card className={styles.card_icon} />
					<div>
						<div className={styles.card_number}>**** 7254</div>
						<div className={styles.card_name}>MasterCard</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<Squircle className={styles.change_button} cornerRadius={10}>
						Изменить карту
					</Squircle>
					<div>Отключить</div>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<h2 className={styles.header}>Monene Plus</h2>
				<p className={styles.subtitle}>
					Расширите ваши возможности —<br /> приобретите премиум подписку
				</p>
				<Squircle cornerRadius={10} className={styles.btn}>
					Подключить подписку
				</Squircle>
				<p className={styles.subscription}>Стоимость подписки - 1299 ₽/мес</p>
			</div>
			<div className={styles.images}>
				<Gear className={styles.gear} />
				<Chart className={styles.chart} />
				<Coin1 className={styles.coin1} />
				<Coin2 className={styles.coin2} />
				<Coin3 className={styles.coin3} />
			</div>
		</div>
	)
}

type Props = {
	connected: boolean
}
