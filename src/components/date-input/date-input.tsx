import 'react-responsive-datepicker/dist/index.css'
import { DatePicker } from 'react-responsive-datepicker'
import { monthNames } from 'utils/index'
import { useState } from 'react'
import Calendar from 'assets/calendar.svg'
import styles from './date-input.module.sass'

export const DateInput = () => {
	const [isCalendarOpen, setCalendarOpen] = useState(false)
	const [date, setDate] = useState<Date | null>(new Date())

	return (
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
				onChange={(date) => {
					console.log(date)
				}}
				headerFormat='DD, MM dd'
				onClose={() => setCalendarOpen(false)}
			/>
		</div>
	)
}
