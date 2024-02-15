import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { RegularExpense } from 'store/survey/survey.types'
import { setRegularExpenses } from 'store/survey/survey.reducer'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-seven.module.sass'

const answers: { text: string; value: RegularExpense }[] = [
    {
        text: 'Интернет',
        value: 'internet',
    },
    {
        text: 'Мобильная связь',
        value: 'cellular network',
    },
    {
        text: 'Уход за собой',
        value: 'self care',
    },
    {
        text: 'Одежда и обувь',
        value: 'clothes',
    },
    {
        text: 'Медицина и лекарства',
        value: 'medicine',
    },
    {
        text: 'Курение',
        value: 'smoking',
    },
    {
        text: 'Фитнес',
        value: 'fitness',
    },
    {
        text: 'Бассейн',
        value: 'swimming pool',
    },
    {
        text: 'Продукты',
        value: 'groceries',
    },
]

export const StepSeven = () => {
    const dispatch = useAppDispatch()
    const regularExpenses = useAppSelector((state) => state.survey.regularExpenses)
    const step = 7

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>Какие регулярные расходы?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, regularExpenses.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setRegularExpenses(answer.value))}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-six'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-nine'>
                    Пропустить
                </Link>
                <Link className={clsx(cs.button_next, regularExpenses.length == 0 && cs.button_next__disabled)} to='/survey/step-nine'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
