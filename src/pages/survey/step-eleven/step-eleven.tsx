import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-eleven.module.sass'

export const StepEleven = () => {
    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.page_number}>11/11</div>
            <div className={cs.progress}>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
                <div className={clsx(cs.progress_bar, cs.progress_bar__fill)}></div>
            </div>
            <h4 className={cs.question}>Добавим что-нибудь?</h4>
            <div className={cs.answers}>
                <div className={cs.answer}>Развлечения</div>
                <div className={cs.answer}>Рестораны</div>
                <div className={cs.answer}>Благотворительность</div>
                <div className={cs.answer}>Подарки</div>
                <div className={cs.answer}>Игры</div>
                <div className={cs.answer}>Доставка</div>
                <div className={cs.answer}>Фастфуд</div>
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-ten'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/finish'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/finish'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
