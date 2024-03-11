import { budgetExpensesGroupItemCreate } from 'store/budget/budget-expenses/budget-expenses.reducer'
import { BudgetExpensesGroupItemCreateGoal } from './budget-expenses-group-item-create-goal/budget-expenses-group-item-create-goal'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { RubleInput } from 'components/ruble-input/ruble-input'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch } from 'hooks/redux.hook'
import ArrowDropDown from 'assets/arrow-drop-down.svg'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './budget-group-item-create.sass'

export const BudgetExpensesGroupItemCreate: FC<Props> = (props) => {
	const { close, groupId } = props
	const dispatch = useAppDispatch()
	const [isGoal, setGoal] = useState(false)
	const methods = useForm()
	const { register, handleSubmit } = methods

	const onFormSubmit = (data) => {
		dispatch(budgetExpensesGroupItemCreate({ groupId, item: data }))
		close()
	}

	return (
		<FormProvider {...methods}>
			<form className={styles.main} onSubmit={handleSubmit(onFormSubmit)}>
				<div className={styles.header}>
					<div>Создание расхода</div>
					<div className={styles.header_actions}>
						<div className={styles.make_goal} onClick={() => setGoal(true)}>
							<Star width={12} height={12} />
							Сделать целью
						</div>
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
						<input className={styles.input} placeholder='Интернет' id='title' {...register('name')} />
					</div>
					{isGoal ? (
						<BudgetExpensesGroupItemCreateGoal close={() => setGoal(false)} />
					) : (
						<div className={styles.input_block}>
							<RubleInput label='Ежемесячный платеж' />
						</div>
						// <div className={styles.input_block}>
						// 	<label className={styles.label} htmlFor='price'>
						// 		Ежемесячный платеж
						// 	</label>
						// 	<input
						// 		className={styles.input}
						// 		id='monthlyPayment'
						// 		type='number'
						// 		placeholder='30 000'
						// 		{...register('price')}
						// 	/>
						// 	<div className={styles.ruble_block}>
						// 		<Ruble className={styles.ruble} />
						// 	</div>
						// </div>
					)}
					<div className={styles.input_block}>
						<label className={styles.label} htmlFor='cheatFrom'>
							Откуда списывать
						</label>
						<input
							className={styles.input}
							id='cheatFrom'
							placeholder='Зарплата'
							{...register('cheatFrom')}
						/>
						<div className={styles.arrow_drop_down_block}>
							<ArrowDropDown className={styles.arrow_drop_down} />
						</div>
					</div>

					<Squircle className={styles.btn} as='button' type='submit' cornerRadius={10}>
						Сохранить
					</Squircle>
				</div>
			</form>
		</FormProvider>
	)
}

type Props = {
	close: VoidFunction
	groupId: string
}
