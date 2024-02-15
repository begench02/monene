import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-eleven.module.sass'
import { Additional } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { setAdditional } from 'store/survey/survey.reducer'

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
            <div className={cs.page_number}>11/11</div>
            <div className={cs.progress}>
                {Array.from(Array(11)).map((_, idx) => {
                    if (idx + 1 <= step) {
                        return <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                    }
                    return <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                })}
            </div>
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
                <Link className={cs.button_next} to='/survey/finish'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
