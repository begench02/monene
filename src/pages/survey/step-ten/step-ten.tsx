import { Link } from 'react-router-dom'
import cs from '../index.module.sass'
import styles from './step-ten.module.sass'
import clsx from 'clsx'
import { Goal } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { setGoals } from 'store/survey/survey.reducer'

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
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.page_number}>{step}/11</div>
            <div className={cs.progress}>
                {Array.from(Array(11)).map((_, idx) => {
                    if (idx + 1 <= step) {
                        return <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                    }
                    return <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                })}
            </div>
            <h4 className={cs.question}>Откладываете на цели?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, goals.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setGoals(answer.value))}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-nine'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-eleven'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/step-eleven'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
