import { HasDebt } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setHasDebts } from 'store/survey/survey.reducer'
import { useAppSelector } from 'src/hooks'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-five.module.sass'

const answers: { text: string; value: HasDebt }[] = [
    {
        text: 'Кредит',
        value: 'credit',
    },
    {
        text: 'Кредитка',
        value: 'credit card',
    },
    {
        text: 'Микрозайм',
        value: 'microloan',
    },
    {
        text: 'Личный долг',
        value: 'personal debt',
    },
    {
        text: 'Рассрочка',
        value: 'installment',
    },
]

export const StepFive = () => {
    const dispatch = useDispatch()
    const hasDebt = useAppSelector((state) => state.survey.hasDebts)
    const step = 5

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>У вас есть долги?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, hasDebt.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setHasDebts(answer.value))}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-four'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-six'>
                    Пропустить
                </Link>
                <Link
                    className={clsx(cs.button_next, hasDebt.length == 0 && cs.button_next__disabled)}
                    to='/survey/step-six'
                >
                    Далее
                </Link>
            </div>
        </div>
    )
}
