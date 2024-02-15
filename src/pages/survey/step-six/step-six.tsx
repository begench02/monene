import { Link } from 'react-router-dom'
import cs from '../index.module.sass'
import styles from './step-six.module.sass'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { Transportation } from 'store/survey/survey.types'
import { setTransportation } from 'store/survey/survey.reducer'

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

    return (
        <div className={styles.main}>
            <div className={cs.page_number}>6/11</div>
            <div className={cs.progress}>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
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
            </div>
            <h4 className={cs.question}>Как вы передвигаетесь?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <div
                        className={clsx(cs.answer, answer.value == transportation && cs.answer__active)}
                        onClick={() => dispatch(setTransportation(answer.value))}
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
                <Link className={cs.button_next} to='/survey/step-seven'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
