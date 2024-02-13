import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-three.module.sass'
import { Link } from 'react-router-dom'

export const StepThree = () => {
    return (
        <div className={styles.main}>
            <div className={cs.page_number}>3/11</div>
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
            <h4 className={cs.question}>На кого тратитесь?</h4>
            <div className={styles.answers}>
                <div className={styles.answer}>На себя</div>
                <div className={styles.answer}>На партнера</div>
                <div className={styles.answer}>Ребенок</div>
                <div className={styles.answer}>Питомец</div>
                <div className={styles.answer}>Подросток (13+ лет)</div>
                <div className={styles.answer}>Помогаю родителям</div>
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-two'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-four'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/step-four'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
