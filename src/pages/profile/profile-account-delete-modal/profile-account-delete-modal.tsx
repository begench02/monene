import { ChangeEvent, FC, useState } from 'react'
import { Squircle } from 'corner-smoothing'
import Close from 'assets/close.svg'
import styles from './profile-account-delete-modal.module.sass'

export const ProfileAccountDeleteModal: FC<Props> = (props) => {
	const { close, confirm } = props
	const [keyword, setKeyword] = useState('')

	const onDeleteClick = () => {
		if (keyword.toLowerCase() === 'удалить') {
			confirm()
			close()
		} else {
			console.log('Слова не совпадают')
		}
	}

	return (
		<div className={styles.main}>
			<Close className={styles.close} />
			<h2 className={styles.title}>Вы действительно хотите удалить аккаунт?</h2>
			<p className={styles.subtitle}>
				Все ваши данные будут удалены, а подписка будет отменена. Прошедший платёж за подписку нельзя будет
				вернуть. Для подтверждения введите слово «удалить»
			</p>
			<div className={styles.input_block}>
				<label htmlFor='delete'>Поле ввода</label>
				<input
					value={keyword}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
					placeholder='удалить'
				/>
			</div>
			<Squircle className={styles.btn} cornerRadius={10}>
				Да, я хочу удалить
			</Squircle>
			<div className={styles.cancel} onClick={close}>
				Отмена
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
	confirm: VoidFunction
}
