import { FC } from 'react'
import { Squircle } from 'corner-smoothing'
import styles from './consultation-application.module.sass'
import clsx from 'clsx'
import Close from 'assets/close.svg'

export const ConsultationApplication: FC<Props> = (props) => {
	const { close } = props
	return (
		<div className={styles.main}>
			<Close className={styles.close} />
			<h2 className={styles.title}>Подать заявку на консультацию</h2>
			<div className={styles.content}>
				<p className={styles.subtitle}>
					Мы поможем вам и объясним на простых
					<br /> словах, что да как работает
				</p>
				<div className={styles.input_block}>
					<label className={styles.label} htmlFor='phone'>
						Номер телефона
					</label>
					<input className={styles.input} id='phone' placeholder='+7 (999) 999-99-99' />
				</div>
				<div className={clsx(styles.date, styles.input_block)}>
					<input className={styles.input} type='time' />
					<input className={styles.input} type='date' />
				</div>
				<Squircle className={styles.pay_btn} cornerRadius={15}>
					Оплатить
				</Squircle>
				<div className={styles.price}>
					Цена консультации: <span>2900₽</span>
				</div>
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
}
