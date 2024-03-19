import { Squircle } from 'corner-smoothing'
import Close from 'assets/close.svg'
import CloseRed from 'assets/close-red.svg'
import Coin1 from 'assets/coin-1.svg'
import Coin2 from 'assets/coin-2.svg'
import Coin3 from 'assets/coin-3.svg'
import styles from './profile-open-more-possibilities.module.sass'
import CheckTwo from 'assets/check-two.svg'
import { FC } from 'react'

export const ProfileOpenMorePossibilities: FC<Props> = (props) => {
	const { close } = props

	return (
		<div className={styles.main}>
			<Close className={styles.close} onClick={close} />
			<h1 className={styles.title}>Открой больше возможностей</h1>
			<div className={styles.content}>
				<div className={styles.plus}>
					<Coin1 className={styles.coin1} />
					<Coin2 className={styles.coin2} />
					<Coin3 className={styles.coin3} />
					<p className={styles.plus_title}>Monene Plus</p>
					<div className={styles.plus_price}>1299 ₽/мес</div>
					<div className={styles.plus_content}>
						<div className={styles.plus_content_item}>
							<div className={styles.check_block}>
								<CheckTwo />
							</div>
							<div>Доступен весь функционал сервиса без ограничений</div>
						</div>
					</div>
					<Squircle className={styles.plus_btn} cornerRadius={10}>
						14 дней бесплатно
					</Squircle>
					<p className={styles.plus_duration}>Ежемесячная оплата</p>
				</div>
				<div className={styles.free}>
					<p className={styles.free_title}>Monene Free</p>
					<div className={styles.free_price}>Бесплатно</div>
					<div className={styles.free_content}>
						<div className={styles.free_content_item}>
							<CloseRed />
							<div>Доход до 50 000₽ в месяц</div>
						</div>
						<div className={styles.free_content_item}>
							<CloseRed />
							<div>До одной цели</div>
						</div>
					</div>
					<Squircle className={styles.free_btn} cornerRadius={10}>
						Включён
					</Squircle>
					<p className={styles.free_duration}>Неограниченно по времени</p>
				</div>
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
}
