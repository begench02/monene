import { BudgetExpensesGroupItem } from 'store/budget/budget-expenses/budget-expenses.type'
import { ChangeEvent, FC, Reducer, useCallback, useMemo, useReducer } from 'react'
import { Squircle } from 'corner-smoothing'
import Ruble from 'assets/ruble.svg'
import styles from './budget-expenses-group-item-edit.module.sass'
import { BudgetExpensesGroupItemEditGoal } from './budget-expenses-group-item-edit-goal/budget-expenses-group-item-edit-goal'
import { budgetExpensesGroupItemEdit } from 'store/budget/budget-expenses/budget-expenses.reducer'
import { useAppDispatch } from 'hooks/redux.hook'
import { Form, useForm } from 'react-hook-form'

export const BudgetExpensesGroupItemEdit: FC<Props> = (props) => {
	const { item, close, groupId } = props
	const { name, price, isGoal } = item
	const appDispatch = useAppDispatch()
	const { register, handleSubmit } = useForm<BudgetExpensesGroupItem>({ defaultValues: item })

	const formSubmit = (data: BudgetExpensesGroupItem) => {
		console.log(data)
		appDispatch(budgetExpensesGroupItemEdit({ groupId, item: data }))
		close()
	}

	return (
		<form onSubmit={handleSubmit(formSubmit)} className={styles.main}>
			<div className={styles.header}>
				<div>Создание расхода</div>
				<div className={styles.header_actions}>
					<div className={styles.delete}>Удалить</div>
					<div className={styles.cancel} onClick={close}>
						Отменить
					</div>
				</div>
			</div>
			<div>
				<div className={styles.input_block}>
					<label className={styles.label} htmlFor='title'>
						Название
					</label>
					<input className={styles.input} id='title' {...register('name')} />
				</div>
				{isGoal ? (
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
