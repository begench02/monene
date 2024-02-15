import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setSubscriptions } from 'store/survey/survey.reducer'
import { Subscription } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'src/hooks'
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
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>Какие есть подписки</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, subscriptions.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setSubscriptions(answer.value))}
                        key={answer.value}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-seven'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-ten'>
                    Пропустить
                </Link>
                <Link
                    className={clsx(cs.button_next, subscriptions.length == 0 && cs.button_next__disabled)}
                    to='/survey/step-ten'
                >
                    Далее
                </Link>
            </div>
        </div>
    )
}
