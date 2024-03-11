import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './budget-group-item-create-goal.module.sass'
import { RubleInput } from 'components/ruble-input/ruble-input'
import { DateInput } from 'components/date-input/date-input'

export const BudgetExpensesGroupItemCreateGoal: FC<Props> = (props) => {
	const { close } = props
	const { register } = useFormContext()

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
				<RubleInput label='Ежемесячный платеж' {...register('monthlyPayment')} />
			</div>
			{/* <div className={styles.input_block}>
				<label className={styles.label} htmlFor='monthly-payment'>
					Ежемесячный платеж
				</label>
				<input className={styles.input} id='monthly-payment' type='number' {...register('price')} />
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div> */}

			<div className={styles.input_block}>
				<RubleInput label='Сколько накопить' {...register('savingsTotal')} />
			</div>
			{/* <div className={styles.input_block}>
				<label className={styles.label} htmlFor='savings-total'>
					Сколько накопить
				</label>
				<input className={styles.input} id='savings-total' type='number' {...register('savingsTotal')} />
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div> */}

			<div className={styles.input_date_block}>
				<div>
					<label className={styles.label} htmlFor='deadline'>
						Срок
					</label>
					<input className={styles.input} id='deadline' />
				</div>
				
				<div>
					<DateInput />
					{/* <label className={styles.label} htmlFor='start-date'>
						Дата начала
					</label>
					<DatePicker onChange={(date) => console.log(date)} id='start-date' /> */}
				</div>
			</div>

			<div className={styles.input_block}>
				<RubleInput label='Накопленная сумма' {...register('savings')} />
			</div>
			{/* <div className={styles.input_block}>
				<label className={styles.label} htmlFor='savings'>
					Накопленная сумма
				</label>
				<input className={styles.input} id='savings' type='number' {...register('savings')}/>
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div> */}
			{/* <div className={styles.input_block}>
				<label className={styles.label} htmlFor='monthlyPayment'>
					Ежемесячный платеж
				</label>
				<input className={styles.input} id='monthlyPayment' type='number' />
				<div className={styles.ruble_block}>
					<Ruble className={styles.ruble} />
				</div>
			</div> */}
		</div>
	)
}

type Props = {
	close: VoidFunction
}
