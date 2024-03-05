import 'react-datepicker/dist/react-datepicker.css'
import { BudgetExpensesGroupItem } from 'store/budget/budget-expenses/budget-expenses.type'
import { BudgetGroupItemAction } from '../budget-expenses-group-item-create.reducer'
import { ChangeEvent, Dispatch, FC } from 'react'
import DatePicker from 'react-datepicker'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './budget-group-item-create-goal.module.sass'

export const BudgetExpensesGroupItemCreateGoal: FC<Props> = (props) => {
	const { close, state, dispatch } = props

	return (
		<div className={styles.main}>
			<div className={styles.goal_header}>
				<div className={styles.goal_header_title}>
					<Star className={styles.star_black} />
					Создание цели
				</div>
				<div className={styles.goal_header_cancel} onClick={close}>
					Отменить
				</div>
			</div>

			<div className={styles.input_block}>
				<label className={styles.label} htmlFor='monthly-payment'>
					Ежемесячный платеж
				</label>
				<input
					className={styles.input}
					value={state.price}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						dispatch({ type: 'set-monthly-payment', payload: e.target.value })
					}
					id='monthly-payment'
					type='number'
				/>
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div>

			<div className={styles.input_block}>
				<label className={styles.label} htmlFor='savings-total'>
					Сколько накопить
				</label>
				<input className={styles.input} id='savings-total' type='number' />
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div>

			<div className={styles.input_date_block}>
				<div>
					<label className={styles.label} htmlFor='deadline'>
						Срок
					</label>
					<input className={styles.input} id='deadline' />
				</div>
				<div>
					<label className={styles.label} htmlFor='start-date'>
						Дата начала
					</label>
					<DatePicker onChange={(date) => console.log(date)} id='start-date' />
				</div>
			</div>

			<div className={styles.input_block}>
				<label className={styles.label} htmlFor='savings'>
					Накопленная сумма
				</label>
				<input className={styles.input} id='savings' type='number' />
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div>
			<div className={styles.input_block}>
				<label className={styles.label} htmlFor='monthlyPayment'>
					Ежемесячный платеж
				</label>
				<input
					className={styles.input}
					id='monthlyPayment'
					type='number'
					// onChange={(e: ChangeEvent<HTMLInputElement>) => setMonthlyPayment(+e.target.value)}
				/>
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
	dispatch: Dispatch<BudgetGroupItemAction>
	state: BudgetExpensesGroupItem
}
