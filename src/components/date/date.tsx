import { useState } from 'react'
import styles from './date.module.sass'
import Arrow from 'assets/arrow-expand.svg'
import { monthName } from 'utils/index'
import { DateExpand } from './date-expand/date-expand'

const date = new Date()
export const DateComponent = () => {
	const [month, setMonth] = useState(date.getMonth())
	const [year, setYear] = useState(date.getFullYear())
	const [isCalendarExpanded, setCalendarExpanded] = useState(false)

	return (
		<div className={styles.main}>
			<div className={styles.left} onClick={() => setMonth((prevMonth) => prevMonth - 1)}>
				<Arrow />
			</div>
			<div className={styles.date} onClick={() => setCalendarExpanded(true)}>
				<div className={styles.month}>{monthName[month]}</div>
				<div className={styles.year}>{year} год</div>
			</div>
			<div className={styles.right} onClick={() => setMonth((prevMonth) => prevMonth + 1)}>
				<Arrow />
			</div>
			{isCalendarExpanded && (
				<DateExpand
					currentYear={year}
					save={(year, month) => {
						setYear(year)
						setMonth(month)
					}}
					currentMonth={month}
					close={() => setCalendarExpanded(false)}
				/>
			)}
		</div>
	)
}
