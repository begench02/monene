import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setSubscriptions } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { Subscription } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import BackArrow from 'assets/back-arrow.svg'
import checkMark from 'assets/auth/check-mark.png'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-nine.module.sass'

const answers: { text: string; value: Subscription }[] = [
	{
		text: 'Яндекс Плюс',
		value: 'yandex plus',
	},
	{
		text: 'Тинькоф Про',
		value: 'tinkoff pro',
	},
	{
		text: 'СберПрайм',
		value: 'sbep prime',
	},
	{
		text: 'Telegram Premium',
		value: 'telegram premium',
	},
	{
		text: 'Ozon Premium',
		value: 'ozon premium',
	},
	{
		text: 'Литрес',
		value: 'litres',
	},
	{
		text: 'VK Музыка',
		value: 'vk music',
	},
]

export const StepNine = () => {
	const dispatch = useAppDispatch()
	const subscriptions = useAppSelector((state) => state.survey.subscriptions)
	const step = 9

	return (
		<Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
			<Squircle cornerRadius={8} className={cs.step_number}>
				{step}/11
			</Squircle>
			{progressBar(step)}
			<h4 className={cs.question}>Какие есть подписки</h4>
			<div className={cs.answers}>
				{answers.map((answer) => (
					<Squircle
						cornerRadius={20}
						borderWidth={1}
						className={clsx(cs.answer, subscriptions.includes(answer.value) && cs.answer__active)}
						onClick={() => dispatch(setSubscriptions(answer.value))}
						key={answer.value}
					>
						{subscriptions.includes(answer.value) && <img src={checkMark} />}
						{answer.text}
					</Squircle>
				))}
			</div>

			<div className={cs.nav_buttons}>
				<Squircle
					as={Link}
					// @ts-ignore
					to='/survey/step-seven'
					cornerRadius={20}
					borderWidth={1}
					className={cs.button_back}
				>
					<BackArrow className={cs.back_arrow} /> Назад
				</Squircle>
				<Link className={cs.button_skip} to='/survey/step-ten'>
					Пропустить
				</Link>
				<Squircle cornerRadius={20}>
					<Link
						className={clsx(cs.button_next, subscriptions.length == 0 && cs.button_next__disabled)}
						to='/survey/step-ten'
					>
						Далее
					</Link>
				</Squircle>
			</div>
		</Squircle>
	)
}
