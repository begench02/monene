import { Additional } from 'store/survey/survey.types'
import { Link } from 'react-router-dom'
import { progressBar } from '../utils'
import { setAdditional } from 'store/survey/survey.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import checkMark from 'assets/auth/check-mark.png'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-eleven.module.sass'

const answers: { text: string; value: Additional }[] = [
    {
        text: 'Развлечения',
        value: 'entertainment',
    },
    {
        text: 'Рестораны',
        value: 'restaurants',
    },
    {
        text: 'Благотворительность',
        value: 'charity',
    },
    {
        text: 'Подарки',
        value: 'presents',
    },
    {
        text: 'Игры',
        value: 'games',
    },
    {
        text: 'Доставка',
        value: 'delivery',
    },
    {
        text: 'Фастфуд',
        value: 'fast food',
    },
]

export const StepEleven = () => {
    const dispatch = useAppDispatch()
    const additional = useAppSelector((state) => state.survey.additional)
    const step = 11

    return (
        <Squircle cornerRadius={15} className={clsx(cs.main, styles.main)}>
            <Squircle cornerRadius={8} className={cs.step_number}>
                {step}/11
            </Squircle>
            {progressBar(step)}
            <h4 className={cs.question}>Добавим что-нибудь?</h4>
            <div className={cs.answers}>
                {answers.map((answer) => (
                    <Squircle
                        cornerRadius={13}
                        borderWidth={1}
                        className={clsx(cs.answer, additional.includes(answer.value) && cs.answer__active)}
                        onClick={() => dispatch(setAdditional(answer.value))}
                        key={answer.value}
                    >
                        {additional.includes(answer.value) && <img src={checkMark} alt='check mark' />}
                        {answer.text}
                    </Squircle>
                ))}
            </div>

            <div className={cs.nav_buttons}>
                <Squircle
                    as={Link}
                    // @ts-ignore
                    to='/survey/step-ten'
                    cornerRadius={20}
                    borderWidth={1}
                    className={cs.button_back}
                >
                    <span>&#60;</span> Назад
                </Squircle>
                <Link className={cs.button_skip} to='/survey/finish'>
                    Пропустить
                </Link>
                <Squircle cornerRadius={20}>
                    <Link
                        className={clsx(cs.button_next, additional.length == 0 && cs.button_next__disabled)}
                        to='/survey/finish'
                    >
                        Далее
                    </Link>
                </Squircle>
            </div>
        </Squircle>
    )
}
