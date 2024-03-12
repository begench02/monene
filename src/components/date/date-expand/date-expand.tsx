import clsx from 'clsx'
import styles from './date-expand.module.sass'
import Arrow from 'assets/arrow-two.svg'
import { FC } from 'react'

export const DateExpand: FC<Props> = (props) => {
	const { close } = props

	return (
		<div className={styles.main}>
			<div className={styles.year}>
				<div>2023</div>
				<div className={styles.arrows}>
					<Arrow className={clsx(styles.arrow)} />
					<Arrow className={clsx(styles.arrow, styles.arrow_down)} />
				</div>
			</div>
			<div className={styles.months}>
				<div>
					<p>Январь</p>
				</div>
				<div>
					<p>Февраль</p>
				</div>
				<div>
					<p>Март</p>
				</div>
				<div>
					<p>Апрель</p>
				</div>
				<div>
					<p>Май</p>
				</div>
				<div>
					<p>Июнь</p>
				</div>
				<div>
					<p>Июль</p>
				</div>
				<div>
					<p>Август</p>
				</div>
				<div>
					<p>Сентябрь</p>
				</div>
				<div>
					<p>Октябрь</p>
				</div>
				<div>
					<p>Ноябрь</p>
				</div>
				<div>
					<p>Декабрь</p>
				</div>
			</div>
			<div className={styles.buttons}>
				<div className={styles.close} onClick={close}>
					Закрыть
				</div>
				<div className={styles.ok}>ОК</div>
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
}
