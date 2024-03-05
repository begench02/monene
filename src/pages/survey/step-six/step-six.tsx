import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setTransportation } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { Transportation } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import BackArrow from 'assets/back-arrow.svg'
import checkMark from 'assets/auth/check-mark.png'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-six.module.sass'

const answers: { text: string; value: Transportation }[] = [
	{
		text: 'Автомобиль',
		value: 'car',
	},
	{
		text: 'Общественный транспорт',
		value: 'public transportation',
	},
	{
		text: 'Такси',
		value: 'taxi',
	},
	{
		text: 'Пешком',
		value: 'walk',
	},
	{
		text: 'Мотоцикл',
		value: 'motorcycle',
	},
	{
		text: 'Велосипед',
		value: 'bicycle',
	},
]

export const StepSix = () => {
	const dispatch = useAppDispatch()
	const transportation = useAppSelector((state) => state.survey.transportation)
	const step = 6

	return (
		<Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
			<Squircle cornerRadius={8} className={cs.step_number}>
				{step}/11
			</Squircle>
			{progressBar(step)}
			<h4 className={cs.question}>Как вы передвигаетесь?</h4>
			<div className={cs.answers}>
				{answers.map((answer) => (
					<Squircle
						cornerRadius={20}
						borderWidth={1}
						className={clsx(cs.answer, answer.value == transportation && cs.answer__active)}
						onClick={() => dispatch(setTransportation(answer.value))}
						key={answer.value}
					>
						{answer.value == transportation && <img src={checkMark} />}
						{answer.text}
					</Squircle>
				))}
			</div>

			<div className={cs.nav_buttons}>
				<Squircle
					as={Link}
					// @ts-ignore
					to='/survey/step-five'
					cornerRadius={20}
					borderWidth={1}
					className={cs.button_back}
				>
					<BackArrow className={cs.back_arrow} /> Назад
				</Squircle>
				<Link className={cs.button_skip} to='/survey/step-seven'>
					Пропустить
				</Link>
				<Squircle cornerRadius={20}>
					<Link
						className={clsx(cs.button_next, !transportation && cs.button_next__disabled)}
						to='/survey/step-seven'
					>
						Далее
					</Link>
				</Squircle>
			</div>
		</Squircle>
	)
}
