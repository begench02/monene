import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setSpendingOn } from 'store/survey/survey.reducer'
import { SpendingOn } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-three.module.sass'

const answers: { text: string; value: SpendingOn }[] = [
    {
        text: 'На себя',
        value: 'myself',
    },
    {
        text: 'На партнера',
        value: 'partner',
    },
    {
        text: 'Ребенок',
        value: 'child',
    },
    {
        text: 'Питомец',
        value: 'pet',
    },
    {
        text: 'Подросток (13+ лет)',
        value: 'teenager',
    },
    {
        text: 'Помогаю родителям',
        value: 'parents',
    },
]

export const StepThree = () => {
    const dispatch = useAppDispatch()
    const spendingOn = useAppSelector((state) => state.survey.spendingOn)
    const step = 3

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>На кого тратитесь?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, spendingOn.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setSpendingOn(answer.value))}
                        key={answer.text}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-two'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-four'>
                    Пропустить
                </Link>
                <Link className={clsx(cs.button_next, spendingOn.length == 0 && cs.button_next__disabled)} to='/survey/step-four'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
