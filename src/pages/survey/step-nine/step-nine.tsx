import { Link } from 'react-router-dom'
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
            <div className={cs.page_number}>9/11</div>
            <div className={cs.progress}>
                {Array.from(Array(11)).map((_, idx) => {
                    if (idx + 1 <= step) {
                        return <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                    }
                    return <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                })}
            </div>
            <h4 className={cs.question}>Какие есть подписки</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, subscriptions.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setSubscriptions(answer.value))}
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
                <Link className={cs.button_next} to='/survey/step-ten'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
