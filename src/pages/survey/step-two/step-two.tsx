import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-two.module.sass'
import { FinancialStatus } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { setFinancialStatus } from 'store/survey/survey.reducer'
import { RootState } from 'store/store'

type Answers = {
    text: string
    value: FinancialStatus
}

const answers: Answers[] = [
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

    return (
        <div className={styles.main}>
            <div className={cs.page_number}>2/11</div>
            <div className={cs.progress}>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
            </div>
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
                <Link className={cs.button_next} to='/survey/step-three'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
