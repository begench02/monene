import { HasDebt } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
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

    return (
        <div className={styles.main}>
            <div className={cs.page_number}>5/11</div>
            <div className={cs.progress}>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
            </div>
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
                <Link className={cs.button_next} to='/survey/step-six'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
