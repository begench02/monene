import { HasDebt } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setHasDebts, setSpendingOn } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppSelector } from 'src/hooks'
import { useDispatch } from 'react-redux'
import checkMark from 'assets/auth/check-mark.png'
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
        <Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
            <Squircle cornerRadius={8} className={cs.step_number}>{step}/11</Squircle>
            {progressBar(step)}
            <h4 className={cs.question}>У вас есть долги?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <Squircle
                        cornerRadius={13}
                        borderWidth={1}
                        className={clsx(cs.answer, hasDebt.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setHasDebts(answer.value))}
                        key={answer.value}
                    >
                        {hasDebt.includes(answer.value) && <img src={checkMark} />}
                        {answer.text}
                    </Squircle>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Squircle
                    as={Link}
                    // @ts-ignore
                    to='/survey/step-four'
                    cornerRadius={20}
                    borderWidth={1}
                    className={cs.button_back}
                >
                    <span>&#60;</span> Назад
                </Squircle>
                <Link className={cs.button_skip} to='/survey/step-six'>
                    Пропустить
                </Link>
                <Squircle cornerRadius={20}>
                    <Link
                        className={clsx(cs.button_next, hasDebt.length == 0 && cs.button_next__disabled)}
                        to='/survey/step-six'
                    >
                        Далее
                    </Link>
                </Squircle>
            </div>
        </Squircle>
    )
}
