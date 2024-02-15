import { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { RootState } from 'store/store'
import { setName, clearName } from 'store/survey/survey.reducer'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-one.module.sass'

export const StepOne = () => {
    const dispatch = useAppDispatch()
    const name = useAppSelector((state: RootState) => state.survey.name)

    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.page_number}>1/11</div>
            <div className={cs.progress}>
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
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
            </div>
            <h4 className={cs.question}>Как вас зовут?</h4>
            <div className={styles.answer}>
                <input
                    className={styles.answer_input}
                    placeholder='Иванов Андрей'
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(setName(e.target.value as string))
                    }}
                />
                {name && (
                    <div className={styles.reset_input} onClick={() => dispatch(clearName())}>
                        &#10005;
                    </div>
                )}
            </div>

            <div className={cs.nav_buttons}>
                <Link to='/survey/step-two' className={cs.button_skip}>
                    Пропустить
                </Link>
                <Link to='/survey/step-two' className={cs.button_next}>
                    Далее
                </Link>
            </div>
        </div>
    )
}
