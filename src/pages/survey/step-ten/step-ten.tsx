import { Link } from 'react-router-dom'
import cs from '../index.module.sass'
import styles from './step-ten.module.sass'
import clsx from 'clsx'

export const StepTen = () => {
    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.page_number}>10/11</div>
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
            <h4 className={cs.question}>Откладываете на цели?</h4>
            <div className={cs.answers}>
                <div className={cs.answer}>На чёрный день</div>
                <div className={cs.answer}>На пенсию</div>
                <div className={cs.answer}>Инвестиции</div>
                <div className={cs.answer}>На недвижимость</div>
                <div className={cs.answer}>На машину</div>
                <div className={cs.answer}>Путешествие</div>
                <div className={cs.answer}>Свадьба</div>
                <div className={cs.answer}>Ничего не подходит</div>
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-nine'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-eleven'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/step-eleven'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
