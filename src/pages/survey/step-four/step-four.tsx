import { Link } from 'react-router-dom'
import { LivingPlace } from 'store/survey/survey.types'
import { progressBar } from '../utils'
import { setLivingPlace } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import BackArrow from 'assets/back-arrow.svg'
import checkMark from 'assets/auth/check-mark.png'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-four.module.sass'

const answers: { text: string; value: LivingPlace }[] = [
	{
		text: 'Снимаю жилье',
		value: 'rent',
	},
	{
		text: 'Собственное жилье',
		value: 'personal dwelling',
	},
	{
		text: 'Ипотека',
		value: 'mortgage',
	},
]

export const StepFour = () => {
	const dispatch = useAppDispatch()
	const livingPlace = useAppSelector((state) => state.survey.livingPlace)
	const step = 4

	return (
		<Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
			<Squircle cornerRadius={8} className={cs.step_number}>
				{step}/11
			</Squircle>
			{progressBar(step)}
			<h4 className={cs.question}>Где проживаете?</h4>
			<div className={cs.answers}>
				{answers.map((answer) => (
					<Squircle
						cornerRadius={20}
						borderWidth={1}
						className={clsx(cs.answer, answer.value == livingPlace && cs.answer__active)}
						onClick={() => dispatch(setLivingPlace(answer.value))}
						key={answer.value}
					>
						{answer.value == livingPlace && <img src={checkMark} />}
						{answer.text}
					</Squircle>
				))}
			</div>

			<div className={cs.nav_buttons}>
				<Squircle
					as={Link}
					// @ts-ignore
					to='/survey/step-three'
					cornerRadius={20}
					borderWidth={1}
					className={cs.button_back}
				>
					<BackArrow className={cs.back_arrow} /> Назад
				</Squircle>
				<Link className={cs.button_skip} to='/survey/step-five'>
					Пропустить
				</Link>
				<Squircle cornerRadius={20}>
					<Link
						className={clsx(cs.button_next, livingPlace ?? cs.button_next__disabled)}
						to='/survey/step-five'
					>
						Далее
					</Link>
				</Squircle>
			</div>
		</Squircle>
	)
}
