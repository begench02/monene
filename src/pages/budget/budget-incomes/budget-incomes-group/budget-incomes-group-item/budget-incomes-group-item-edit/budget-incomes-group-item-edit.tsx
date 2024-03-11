import {
	budgetIncomesAdditionalGroupItemDelete,
	budgetIncomesAdditionalGroupItemEdit,
} from 'store/budget/budget-incomes/budget-incomes.reducer'
import { DeleteModal } from 'components/delete-modal/delete-modal'
import { FC, useState } from 'react'
import { RubleInput } from 'components/ruble-input/ruble-input'
import { useDispatch } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './budget-incomes-group-item-edit.module.sass'
import { BudgetIncomesGroupItem } from 'store/budget/budget-incomes/budget-incomes.type'
import { Button } from 'components/button/button'

export const BudgetIncomesGroupItemEdit: FC<Props> = (props) => {
	const { close, item } = props
	const dispatch = useDispatch()
	const methods = useForm({ defaultValues: item })
	const { register, handleSubmit } = methods
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

	const onFormSubmit = (data) => {
		dispatch(budgetIncomesAdditionalGroupItemEdit({ ...item, ...data }))
		close()
	}

	return (
		<FormProvider {...methods}>
			<form className={styles.main} onSubmit={handleSubmit(onFormSubmit)}>
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
							confirm={() => dispatch(budgetIncomesAdditionalGroupItemDelete({ itemId: item.id }))}
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
						<input id='name' placeholder='Фриланс' {...register('name')} />
					</div>
					<div className={styles.input_block}>
						<RubleInput label='Сумма' />
					</div>
					<div className={styles.date}>
						<div className={styles.input_block}>
							<label htmlFor='month'>Периодичность</label>
							<input id='month' placeholder='5 мес' {...register('period')} />
						</div>
						<div className={styles.input_block}>
							<label htmlFor='start-date'>Дата начала</label>
							<input id='start-date' type='date' placeholder='5 февраля 2024' {...register('date')} />
						</div>
					</div>
				</div>
				<Button text='Сохранить' />
			</form>
		</FormProvider>
	)
}

type Props = {
	close: VoidFunction
	item: BudgetIncomesGroupItem
}
