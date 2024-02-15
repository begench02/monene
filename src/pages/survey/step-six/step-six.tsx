import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setTransportation } from 'store/survey/survey.reducer'
import { Transportation } from 'store/survey/survey.types'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-six.module.sass'

const answers: { text: string; value: Transportation }[] = [
    {
        text: 'Автомобиль',
        value: 'car',
    },
    {
        text: 'Общественный транспорт',
        value: 'public transportation',
    },
    {
        text: 'Такси',
        value: 'taxi',
    },
    {
        text: 'Пешком',
        value: 'walk',
    },
    {
        text: 'Мотоцикл',
        value: 'motorcycle',
    },
    {
        text: 'Велосипед',
        value: 'bicycle',
    },
]

export const StepSix = () => {
    const dispatch = useAppDispatch()
    const transportation = useAppSelector((state) => state.survey.transportation)
    const step = 6

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.step_number}>{step}/11</div>
            {progressBar(step)}
            <h4 className={cs.question}>Как вы передвигаетесь?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, answer.value == transportation && cs.answer__active)}
                        onClick={() => dispatch(setTransportation(answer.value))}
                        key={answer.value}
                    >
                        {answer.text}
                    </div>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-five'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-seven'>
                    Пропустить
                </Link>
                <Link
                    className={clsx(cs.button_next, !transportation && cs.button_next__disabled)}
                    to='/survey/step-seven'
                >
                    Далее
                </Link>
            </div>
        </div>
    )
}