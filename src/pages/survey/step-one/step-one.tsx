import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-one.module.sass'

export const StepOne = () => {
    return (
        <div className={styles.main}>
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
                <input className={styles.answer_input} placeholder='Иванов Андрей' />
                <div className={styles.reset_input}>&#10005;</div>
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
