import { ChangeEvent, FC, useState } from 'react'
import { budgetExpensesGroupCreate } from 'store/budget/budget-expenses/budget-expenses.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch } from 'hooks/redux.hook'
import EmojiPicker from 'emoji-picker-react'
import styles from './budget-expenses-group-create.module.sass'

let icon = '💼'
export const BudgetExpensesGroupCreate: FC<Props> = (props) => {
	const { close } = props
	const dispatch = useAppDispatch()
	const [name, setName] = useState('')
	const [isEmojiMenuOpen, setEmojiMenuOpen] = useState(false)

	const onEmojiClick = (data) => {
		setEmojiMenuOpen(false)
		icon = data.emoji
	}

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>Создание группы</div>
				<div className={styles.cancel} onClick={close}>
					Отменить
				</div>
			</div>
			<div className={styles.input_block}>
				<div className={styles.icon} onClick={() => setEmojiMenuOpen(true)}>
					{icon}
				</div>
				<input
					placeholder='Введите название группы'
					value={name}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
				/>
			</div>
			<EmojiPicker onEmojiClick={onEmojiClick} open={isEmojiMenuOpen} />
			<Squircle
				className={styles.btn}
				cornerRadius={5}
				onClick={() => {
					dispatch(budgetExpensesGroupCreate({ name, icon, monthPrice: 0, items: [] }))
					close()
				}}
			>
				Сохранить
			</Squircle>
		</div>
	)
}

type Props = {
	close: VoidFunction
}
