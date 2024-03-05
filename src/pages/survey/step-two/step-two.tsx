import { FinancialStatus } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setFinancialStatus } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import BackArrow from 'assets/back-arrow.svg'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-two.module.sass'

const answers: { text: string; value: FinancialStatus }[] = [
	{
		text: '😢 - Грустно, ничего не понимаю',
		value: 'bad',
	},
	{
		text: '😐 - Даже не знаю',
		value: 'ok',
	},
	{
		text: '🙂 - Стабильно. Деньги есть, на что-то трачу',
		value: 'good',
	},
	{
		text: '😊 - Хорошо!',
		value: 'great',
	},
]

export const StepTwo = () => {
	const dispatch = useAppDispatch()
	const currentFinancialStatus = useAppSelector((state) => state.survey.financialStatus)
	const step = 2

	return (
		<Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
			<Squircle cornerRadius={8} className={cs.step_number}>
				{step}/11
			</Squircle>
			{progressBar(step)}
			<h4 className={cs.question}>Какой у вас финансовый статус?</h4>
			<div className={styles.answers}>
				{answers.map((answer) => (
					<div
						className={clsx(styles.answer, answer.value == currentFinancialStatus && cs.answer__active)}
						onClick={() => dispatch(setFinancialStatus(answer.value))}
						key={answer.value}
					>
						{answer.text}
					</div>
				))}
			</div>

			<div className={cs.nav_buttons}>
				<Squircle
					as={Link}
					// @ts-ignore
					to='/survey/step-one'
					cornerRadius={20}
					borderWidth={1}
					className={cs.button_back}
				>
					<BackArrow className={cs.back_arrow} /> Назад
				</Squircle>
				<Link className={cs.button_skip} to='/survey/step-three'>
					Пропустить
				</Link>
				<Squircle cornerRadius={20}>
					<Link
						className={clsx(cs.button_next, !currentFinancialStatus && cs.button_next__disabled)}
						to='/survey/step-three'
					>
						Далее
					</Link>
				</Squircle>
			</div>
		</Squircle>
	)
}
