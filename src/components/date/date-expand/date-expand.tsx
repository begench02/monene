import clsx from 'clsx'
import styles from './date-expand.module.sass'
import Arrow from 'assets/arrow-two.svg'
import { FC, useState } from 'react'

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

export const DateExpand: FC<Props> = (props) => {
	const { close, currentMonth, currentYear, save } = props
	const [month, setMonth] = useState(currentMonth)
	const [year, setYear] = useState(currentYear)

	return (
		<div className={styles.main}>
			<div className={styles.year}>
				<div>{year}</div>
				<div className={styles.arrows}>
					<Arrow className={clsx(styles.arrow)} onClick={() => setYear((prevYear) => prevYear + 1)} />
					<Arrow
						className={clsx(styles.arrow, styles.arrow_down)}
						onClick={() => setYear((prevYear) => prevYear - 1)}
					/>
				</div>
			</div>
			<div className={styles.months}>
				{months.map((m, index) => (
					<div className={clsx(index === month && styles.current_month)}>
						<p onClick={() => setMonth(index)}>{m}</p>
					</div>
				))}
			</div>
			<div className={styles.buttons}>
				<div className={styles.close} onClick={close}>
					Закрыть
				</div>
				<div
					className={styles.ok}
					onClick={() => {
						save(year, month)
						close()
					}}
				>
					ОК
				</div>
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
	currentMonth: number
	currentYear: number
	save: (year: number, month: number) => void
}
