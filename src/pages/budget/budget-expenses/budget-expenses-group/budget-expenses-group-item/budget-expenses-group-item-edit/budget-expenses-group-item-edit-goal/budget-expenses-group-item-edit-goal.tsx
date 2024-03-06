import { BudgetExpensesGroupItem } from 'store/budget/budget-expenses/budget-expenses.type'
import { ChangeEvent, Dispatch, FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './budget-expenses-group-item-edit-goal.module.sass'

export const BudgetExpensesGroupItemEditGoal: FC<Props> = (props) => {
	const { register } = props

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
				<input className={styles.input} {...register('price')} id='monthly-payment' type='number' />
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div>

			<div className={styles.input_block}>
				<label className={styles.label} htmlFor='savings-total'>
					Сколько накопить
				</label>
				<input className={styles.input} {...register('savingsTotal')} id='savings-total' type='number' />
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
					<input type='date' {...register('startDate')}/>
				</div>
			</div>

			<div className={styles.input_block}>
				<label className={styles.label} htmlFor='savings'>
					Накопленная сумма
				</label>
				<input className={styles.input} {...register('savings')} id='savings' type='number' />
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
	register: UseFormRegister<BudgetExpensesGroupItem>
}
