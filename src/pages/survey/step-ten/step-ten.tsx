import { Goal } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setGoals } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import BackArrow from 'assets/back-arrow.svg'
import checkMark from 'assets/auth/check-mark.png'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-ten.module.sass'

const answers: { text: string; value: Goal }[] = [
	{
		text: 'На чёрный день',
		value: 'rainy day',
	},
	{
		text: 'На пенсию',
		value: 'retirement',
	},
	{
		text: 'Инвестиции',
		value: 'investments',
	},
	{
		text: 'На недвижимость',
		value: 'real estate',
	},
	{
		text: 'На машину',
		value: 'car',
	},
	{
		text: 'Путешествие',
		value: 'travel',
	},
	{
		text: 'Свадьба',
		value: 'wedding',
	},
	{
		text: 'Ничего не подходит',
		value: 'nothing matches',
	},
]

export const StepTen = () => {
	const dispatch = useAppDispatch()
	const goals = useAppSelector((state) => state.survey.goals)
	const step = 10

	return (
		<Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
			<Squircle cornerRadius={8} className={cs.step_number}>
				{step}/11
			</Squircle>
			{progressBar(step)}
			<h4 className={cs.question}>Откладываете на цели?</h4>
			<div className={cs.answers}>
				{answers.map((answer) => (
					<Squircle
						cornerRadius={20}
						borderWidth={1}
						className={clsx(cs.answer, goals.includes(answer.value) && cs.answer__active)}
						onClick={() => dispatch(setGoals(answer.value))}
						key={answer.value}
					>
						{goals.includes(answer.value) && <img src={checkMark} alt='check mark' />}
						{answer.text}
					</Squircle>
				))}
			</div>

			<div className={cs.nav_buttons}>
				<Squircle
					as={Link}
					// @ts-ignore
					to='/survey/step-nine'
					cornerRadius={20}
					borderWidth={1}
					className={cs.button_back}
				>
					<BackArrow className={cs.back_arrow} /> Назад
				</Squircle>
				<Link className={cs.button_skip} to='/survey/step-eleven'>
					Пропустить
				</Link>
				<Squircle cornerRadius={20}>
					<Link
						className={clsx(cs.button_next, goals.length == 0 && cs.button_next__disabled)}
						to='/survey/step-eleven'
					>
						Далее
					</Link>
				</Squircle>
			</div>
		</Squircle>
	)
}
