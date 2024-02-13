import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-nine.module.sass'

export const StepNine = () => {
    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.page_number}>9/11</div>
            <div className={cs.progress}>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__empty)}></div>
            </div>
            <h4 className={cs.question}>Какие есть подписки</h4>
            <div className={cs.answers}>
                <div className={cs.answer}>Яндекс Плюс</div>
                <div className={cs.answer}>Тинькоф Про</div>
                <div className={cs.answer}>СберПрайм</div>
                <div className={cs.answer}>Telegram Premium</div>
                <div className={cs.answer}>Ozon Premium</div>
                <div className={cs.answer}>Литрес</div>
                <div className={cs.answer}>VK Музыка</div>
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-eight'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-ten'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/step-ten'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
