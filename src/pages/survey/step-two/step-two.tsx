import { FinancialStatus } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setFinancialStatus } from 'store/survey/survey.reducer'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-two.module.sass'

const answers: { text: string; value: FinancialStatus }[] = [
    {
        text: 'Грустно, ничего не понимаю',
        value: 'bad',
    },
    {
        text: 'Даже не знаю',
        value: 'ok',
    },
    {
        text: 'Стабильно. Деньги есть, на что-то трачу',
        value: 'good',
    },
    {
        text: 'Хорошо!',
        value: 'great',
    },
]

export const StepTwo = () => {
    const dispatch = useAppDispatch()
    const currentFinancialStatus = useAppSelector((state) => state.survey.financialStatus)
    const step = 2

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>Какой у вас финансовый статус?</h4>
            <div className={styles.answers}>
                {answers.map((answer) => (
                    <div>
                        <div
                            className={clsx(styles.answer, answer.value == currentFinancialStatus && cs.answer__active)}
                            onClick={() => dispatch(setFinancialStatus(answer.value))}
                            key={answer.text}
                        >
                            {answer.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-one'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-three'>
                    Пропустить
                </Link>
                <Link
                    className={clsx(cs.button_next, !currentFinancialStatus && cs.button_next__disabled)}
                    to='/survey/step-three'
                >
                    Далее
                </Link>
            </div>
        </div>
    )
}
