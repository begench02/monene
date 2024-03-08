import { BudgetExpensesGroupItem } from 'store/budget/budget-expenses/budget-expenses.type'
import {
	budgetExpensesGroupItemDelete,
	budgetExpensesGroupItemEdit,
} from 'store/budget/budget-expenses/budget-expenses.reducer'
import { BudgetExpensesGroupItemEditGoal } from './budget-expenses-group-item-edit-goal/budget-expenses-group-item-edit-goal'
import { ChangeEvent, FC, Reducer, useCallback, useMemo, useReducer, useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch } from 'hooks/redux.hook'
import Ruble from 'assets/ruble.svg'
import styles from './budget-expenses-group-item-edit.module.sass'
import { DeleteModal } from 'components/delete-modal/delete-modal'

export const BudgetExpensesGroupItemEdit: FC<Props> = (props) => {
	const { item, close, groupId } = props
	const dispatch = useAppDispatch()
	const { register, handleSubmit } = useForm<BudgetExpensesGroupItem>({ defaultValues: item })
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

	const formSubmit = (data: BudgetExpensesGroupItem) => {
		dispatch(budgetExpensesGroupItemEdit({ groupId, item: data }))
		close()
	}

	return (
		<form onSubmit={handleSubmit(formSubmit)} className={styles.main}>
			<div className={styles.header}>
				<div>Изменение разового дохода</div>
				<div className={styles.header_actions}>
					<div className={styles.delete} onClick={() => setDeleteModalOpen(true)}>
						Удалить
					</div>
					<div className={styles.cancel} onClick={close}>
						Отменить
					</div>
					{isDeleteModalOpen && (
						<div className={styles.delete_main}>
							<div className={styles.delete_title}>Вы действительно хотите удалить расход?</div>
							<div className={styles.delete_buttons}>
								<div
									className={styles.delete_yes}
									onClick={() => {
										dispatch(budgetExpensesGroupItemDelete({ groupId, itemId: item.id }))
										close()
									}}
								>
									<p>Да</p>
								</div>
								<div className={styles.delete_no} onClick={close}>
									<p>Нет</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div>
				<div className={styles.input_block}>
					<label className={styles.label} htmlFor='title'>
						Название
					</label>
					<input className={styles.input} id='title' {...register('name')} />
				</div>
				{item.isGoal ? (
					<BudgetExpensesGroupItemEditGoal register={register} />
				) : (
					<div className={styles.input_block}>
						<label className={styles.label} htmlFor='monthlyPayment'>
							Ежемесячный платеж
						</label>
						<input
							className={styles.input}
							id='monthlyPayment'
							type='number'
							{...register('price')}
							placeholder='0'
						/>
						<div className={styles.ruble_block}>
							<Ruble className={styles.ruble} />
						</div>
					</div>
				)}
				<div className={styles.input_block}>
					<label className={styles.label} htmlFor='cheatFrom'>
						Откуда списывать
					</label>
					<input className={styles.input} {...register('cheatFrom')} id='cheatFrom' />
				</div>

				<Squircle className={styles.btn} as='button' type='submit' cornerRadius={10}>
					Сохранить
				</Squircle>
			</div>
		</form>
	)
}

type Props = {
	item: BudgetExpensesGroupItem
	groupId: string
	close: VoidFunction
}
