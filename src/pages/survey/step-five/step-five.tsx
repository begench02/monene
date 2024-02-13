import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-five.module.sass'
import { Link } from 'react-router-dom'

export const StepFive = () => {
    return (
        <div className={styles.main}>
            <div className={cs.page_number}>5/11</div>
            <div className={cs.progress}>
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
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
            </div>
            <h4 className={cs.question}>У вас есть долги?</h4>
            <div className={cs.answers}>
                <div className={cs.answer}>Кредит</div>
                <div className={cs.answer}>Кредитка</div>
                <div className={cs.answer}>Микрозайм</div>
                <div className={cs.answer}>Личный долг</div>
                <div className={cs.answer}>Рассрочка</div>
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-four'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-six'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/step-six'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
