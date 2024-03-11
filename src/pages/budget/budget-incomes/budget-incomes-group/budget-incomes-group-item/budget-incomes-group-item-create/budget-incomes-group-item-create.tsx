import 'react-responsive-datepicker/dist/index.css'
import { DatePicker } from 'react-responsive-datepicker'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { monthNames } from 'utils/index'
import { RubleInput } from 'components/ruble-input/ruble-input'
import { Squircle } from 'corner-smoothing'
import Calendar from 'assets/calendar.svg'
import styles from './budget-incomes-group-item-create.module.sass'
import { budgetIncomesAdditionalGroupItemCreate } from 'store/budget/budget-incomes/budget-incomes.reducer'
import { useAppDispatch } from 'hooks/redux.hook'

export const BudgetIncomesGroupItemCreate: FC<Props> = (props) => {
	const { close } = props
	const methods = useForm()
	const { register, handleSubmit } = methods
	const [isCalendarOpen, setCalendarOpen] = useState(false)
	const [date, setDate] = useState<Date>(new Date())
	const dispatch = useAppDispatch()

	const onFormSubmit = (data) => {
		dispatch(budgetIncomesAdditionalGroupItemCreate({ ...data, date: date.toISOString() }))
		close()
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onFormSubmit)} className={styles.main}>
				<div className={styles.header}>
					<div className={styles.title}>Создание дохода</div>
					<div className={styles.actions}>
						<div className={styles.cancel} onClick={close}>
							Отменить
						</div>
					</div>
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
							<input id='month' type='number' placeholder='5 мес' {...register('period')} />
						</div>
						<div className={styles.input_block}>
							<label htmlFor='start-date'>Дата начала</label>
							<div className={styles.date_start}>
								<div>
									{date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()}
								</div>
								<div className={styles.calendar_block} onClick={() => setCalendarOpen(true)}>
									<Calendar className={styles.calendar} />
								</div>
							</div>
							<DatePicker
								isOpen={isCalendarOpen}
								onChange={(date) => setDate(date)}
								headerFormat='DD, MM dd'
								onClose={() => setCalendarOpen(false)}
							/>
						</div>
					</div>
					<Squircle cornerRadius={10} as='button' className={styles.btn}>
						Сохранить
					</Squircle>
				</div>
			</form>
		</FormProvider>
	)
}

type Props = {
	close: VoidFunction
}
