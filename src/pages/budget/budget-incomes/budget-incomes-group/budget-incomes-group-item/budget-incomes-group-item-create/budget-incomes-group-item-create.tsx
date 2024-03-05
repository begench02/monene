import { RubleInput } from 'components/ruble-input/ruble-input'
import styles from './budget-incomes-group-item-create.module.sass'
import { FC } from 'react'

export const BudgetIncomesGroupItemCreate: FC<Props> = (props) => {
	const { close } = props

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>Создание дохода</div>
				<div className={styles.actions}>
					<div className={styles.delete}>Удалить</div>
					<div className={styles.cancel} onClick={close}>Отменить</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.input_block}>
					<label htmlFor='name'>Название</label>
					<input id='name' placeholder='Фриланс' />
				</div>
				<RubleInput label='Сумма' />
				<div className={styles.date}>
					<div className={styles.input_block}>
						<label htmlFor='month'>Периодичность</label>
						<input id='month' placeholder='5 мес' />
					</div>
					<div className={styles.input_block}>
						<label htmlFor='start-date'>Дата начала</label>
						<input id='start-date' type='date' placeholder='5 февраля 2024' />
					</div>
				</div>
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
}
