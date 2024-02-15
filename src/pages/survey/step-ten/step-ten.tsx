import { Goal } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setGoals } from 'store/survey/survey.reducer'
import { useAppDispatch, useAppSelector } from 'src/hooks'
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
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>Откладываете на цели?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, goals.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setGoals(answer.value))}
                        key={answer.value}
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
                <Link
                    className={clsx(cs.button_next, goals.length == 0 && cs.button_next__disabled)}
                    to='/survey/step-eleven'
                >
                    Далее
                </Link>
            </div>
        </div>
    )
}
