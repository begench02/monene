import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-four.module.sass'

export const StepFour = () => {
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
            <div className={styles.answers}>
                <div className={styles.answer}>Снимаю жилье</div>
                <div className={styles.answer}>Собственное жилье</div>
                <div className={styles.answer}>Ипотека</div>
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
