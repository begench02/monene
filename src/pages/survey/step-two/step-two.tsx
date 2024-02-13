import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-two.module.sass'

export const StepTwo = () => {
    return (
        <div className={styles.main}>
            <div className={cs.page_number}>2/11</div>
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
            <h4 className={cs.question}>Какой у вас финансовый статус?</h4>
            <div className={styles.answers}>
                <div>
                    <div className={clsx(styles.answer)}>Грустно, ничего не понимаю</div>
                </div>
                <div>
                    <div className={clsx(styles.answer)}>Даже не знаю</div>
                </div>
                <div>
                    <div className={clsx(styles.answer)}>Стабильно. Деньги есть, на что-то трачуd</div>
                </div>
                <div>
                    <div className={clsx(styles.answer)}>Хорошо!</div>
                </div>
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-one'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-three'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/step-three'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
