import { Link } from 'react-router-dom'
import cs from '../index.module.sass'
import styles from './step-six.module.sass'
import clsx from 'clsx'

export const StepSix = () => {
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
                <div className={cs.answer}>Кредит</div>
                <div className={cs.answer}>Кредитка</div>
                <div className={cs.answer}>Микрозайм</div>
                <div className={cs.answer}>Личный долг</div>
                <div className={cs.answer}>Рассрочка</div>
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
