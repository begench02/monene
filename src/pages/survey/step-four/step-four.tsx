import { Link } from 'react-router-dom'
import { LivingPlace } from 'store/survey/survey.types'
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

    return (
        <div className={styles.main}>
            <div className={cs.page_number}>4/11</div>
            <div className={cs.progress}>
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
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
            </div>
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
                <Link className={cs.button_next} to='/survey/step-five'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
