import { Additional } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setAdditional } from 'store/survey/survey.reducer'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-eleven.module.sass'

const answers: { text: string; value: Additional }[] = [
    {
        text: 'Развлечения',
        value: 'entertainment',
    },
    {
        text: 'Рестораны',
        value: 'restaurants',
    },
    {
        text: 'Благотворительность',
        value: 'charity',
    },
    {
        text: 'Подарки',
        value: 'presents',
    },
    {
        text: 'Игры',
        value: 'games',
    },
    {
        text: 'Доставка',
        value: 'delivery',
    },
    {
        text: 'Фастфуд',
        value: 'fast food',
    },
]

export const StepEleven = () => {
    const dispatch = useAppDispatch()
    const additional = useAppSelector((state) => state.survey.additional)
    const step = 11

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>Добавим что-нибудь?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, additional.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setAdditional(answer.value))}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-ten'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/finish'>
                    Пропустить
                </Link>
                <Link className={clsx(cs.button_next, additional.length == 0 && cs.button_next__disabled)} to='/survey/finish'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
