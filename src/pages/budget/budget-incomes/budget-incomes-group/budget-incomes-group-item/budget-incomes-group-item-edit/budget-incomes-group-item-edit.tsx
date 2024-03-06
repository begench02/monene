import { DeleteModal } from 'components/delete-modal/delete-modal'
import { FC, useState } from 'react'
import { RubleInput } from 'components/ruble-input/ruble-input'
import { useForm } from 'react-hook-form'
import styles from './budget-incomes-group-item-edit.module.sass'
import { useDispatch } from 'react-redux'
import { budgetIncomesGroupItemDelete } from 'store/budget/budget-incomes/budget-incomes.reducer'

export const BudgetIncomesGroupItemEdit: FC<Props> = (props) => {
	const { close, groupId, itemId } = props
	const dispatch = useDispatch()
	const { register } = useForm()
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

	return (
		<form className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>Изменение дохода</div>
				<div className={styles.actions}>
					<div className={styles.delete} onClick={() => setDeleteModalOpen(true)}>
						Удалить
					</div>
					<div className={styles.cancel} onClick={close}>
						Отменить
					</div>
				</div>
				{isDeleteModalOpen && (
					<DeleteModal
						text='Вы действительно хотите удалить дополнительный доход?'
						confirm={() => dispatch(budgetIncomesGroupItemDelete({ groupId, itemId }))}
						close={() => setDeleteModalOpen(false)}
						style={{
							width: '300px',
							height: '132px',
							top: '10%',
							right: '25%',
						}}
					/>
				)}
			</div>
			<div className={styles.content}>
				<div className={styles.input_block}>
					<label htmlFor='name'>Название</label>
					<input id='name' placeholder='Фриланс' {...register('freelance')} />
				</div>
				<RubleInput label='Сумма' />
				<div className={styles.date}>
					<div className={styles.input_block}>
						<label htmlFor='month'>Периодичность</label>
						<input id='month' placeholder='5 мес' {...register('periodicity')} />
					</div>
					<div className={styles.input_block}>
						<label htmlFor='start-date'>Дата начала</label>
						<input id='start-date' type='date' placeholder='5 февраля 2024' {...register('start-date')} />
					</div>
				</div>
			</div>
		</form>
	)
}

type Props = {
	close: VoidFunction
	groupId: string
	itemId: string
}
