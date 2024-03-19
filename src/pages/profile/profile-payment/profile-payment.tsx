import { Button } from 'components/button/button'
import styles from './profile-payment.module.sass'
import { FC } from 'react'

export const ProfilePayment: FC<Props> = (props) => {
	const { variant } = props
	const isPayment = variant === 'payment'

	return (
		<div className={styles.main}>
			<h2 className={styles.title}>{isPayment ? 'Способ оплаты' : 'Привязка новой карты'} </h2>
			<p>
				{isPayment
					? 'Сейчас вы платите 1 299₽'
					: 'Сейчас деньги не будут списываться.Следующее списание 1 299₽ — 6 марта.'}
			</p>
			<div className={styles.input_block}>
				<label htmlFor='card-number'>Номер карты</label>
				<input id='card-number' placeholder='1111 1111 1111 1111' />
			</div>
			<Button onClick={() => {}} text={isPayment ? 'Оплатить подписку' : 'Привязать карту'} />
			{isPayment && <p>Следующее списание 299₽ — 6 марта</p>}
		</div>
	)
}

type Props = {
	variant: 'payment' | 'connect'
}
