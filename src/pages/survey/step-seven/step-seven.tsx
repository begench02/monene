import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { RegularExpense } from 'store/survey/survey.types'
import { setRegularExpenses } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import BackArrow from 'assets/back-arrow.svg'
import checkMark from 'assets/auth/check-mark.png'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-seven.module.sass'

const answers: { text: string; value: RegularExpense }[] = [
	{
		text: 'Интернет',
		value: 'internet',
	},
	{
		text: 'Мобильная связь',
		value: 'cellular network',
	},
	{
		text: 'Уход за собой',
		value: 'self care',
	},
	{
		text: 'Одежда и обувь',
		value: 'clothes',
	},
	{
		text: 'Медицина и лекарства',
		value: 'medicine',
	},
	{
		text: 'Курение',
		value: 'smoking',
	},
	{
		text: 'Фитнес',
		value: 'fitness',
	},
	{
		text: 'Бассейн',
		value: 'swimming pool',
	},
	{
		text: 'Продукты',
		value: 'groceries',
	},
]

export const StepSeven = () => {
	const dispatch = useAppDispatch()
	const regularExpenses = useAppSelector((state) => state.survey.regularExpenses)
	const step = 7

	return (
		<Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
			<Squircle cornerRadius={8} className={cs.step_number}>
				{step}/11
			</Squircle>
			{progressBar(step)}
			<h4 className={cs.question}>Какие регулярные расходы?</h4>
			<div className={cs.answers}>
				{answers.map((answer) => (
					<Squircle
						cornerRadius={20}
						borderWidth={1}
						className={clsx(cs.answer, regularExpenses.includes(answer.value) && cs.answer__active)}
						onClick={() => dispatch(setRegularExpenses(answer.value))}
						key={answer.value}
					>
						{regularExpenses.includes(answer.value) && <img src={checkMark} />}
						{answer.text}
					</Squircle>
				))}
			</div>

			<div className={cs.nav_buttons}>
				<Squircle
					as={Link}
					// @ts-ignore
					to='/survey/step-six'
					cornerRadius={20}
					borderWidth={1}
					className={cs.button_back}
				>
					<BackArrow className={cs.back_arrow} /> Назад
				</Squircle>
				<Link className={cs.button_skip} to='/survey/step-nine'>
					Пропустить
				</Link>
				<Squircle cornerRadius={20}>
					<Link
						className={clsx(cs.button_next, regularExpenses.length == 0 && cs.button_next__disabled)}
						to='/survey/step-nine'
					>
						Далее
					</Link>
				</Squircle>
			</div>
		</Squircle>
	)
}
