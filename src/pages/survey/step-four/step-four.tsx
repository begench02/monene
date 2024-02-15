import { Link } from 'react-router-dom'
import { LivingPlace } from 'store/survey/survey.types'
import { progressBar } from '../utils'
import { setLivingPlace } from 'store/survey/survey.reducer'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-four.module.sass'

const answers: { text: string; value: LivingPlace }[] = [
    {
        text: 'Снимаю жилье',
        value: 'rent',
    },
    {
        text: 'Собственное жилье',
        value: 'personal dwelling',
    },
    {
        text: 'Ипотека',
        value: 'mortgage',
    },
]

export const StepFour = () => {
    const dispatch = useAppDispatch()
    const livingPlace = useAppSelector((state) => state.survey.livingPlace)
    const step = 4

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>Где проживаете?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, answer.value == livingPlace && cs.answer__active)}
                        onClick={() => dispatch(setLivingPlace(answer.value))}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-three'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-five'>
                    Пропустить
                </Link>
                <Link className={clsx(cs.button_next, livingPlace ?? cs.button_next__disabled)} to='/survey/step-five'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
