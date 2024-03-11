import 'react-responsive-datepicker/dist/index.css'
import { DatePicker } from 'react-responsive-datepicker'
import { FC, useState } from 'react'
import { monthNames } from 'utils/index'
import { RubleInput } from 'components/ruble-input/ruble-input'
import { Squircle } from 'corner-smoothing'
import { useForm } from 'react-hook-form'
import Calendar from 'assets/calendar.svg'
import styles from './budget-incomes-main-group-item-create.module.sass'

export const BudgetIncomesMainGroupItemCreate: FC<Props> = (props) => {
	const { close } = props
	const { register, handleSubmit } = useForm()
	const [isCalendarOpen, setCalendarOpen] = useState(false)
	const [date, setDate] = useState<Date>(new Date())

	const onFormSubmit = (data) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onFormSubmit)} className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>Создание дохода</div>
				<div className={styles.actions}>
					<div className={styles.delete}>Удалить</div>
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
				<RubleInput label='Сумма' {...register('price')} />
				<div className={styles.date}>
					<div className={styles.input_block}>
						<label htmlFor='month'>Периодичность</label>
						<input id='month' placeholder='5 мес' />
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
	)
}

type Props = {
	close: VoidFunction
}
