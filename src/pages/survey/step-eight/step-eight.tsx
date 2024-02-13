import { Link } from 'react-router-dom'
import clsx from 'clsx'
import cs from '../index.module.sass'
import styles from './step-eight.module.sass'

export const StepEight = () => {
    return (
        <div className={clsx(cs.main, styles.main)}>
            <div className={cs.page_number}>8/11</div>
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
                <h4 className={cs.question}></h4>
            <div className={cs.answers}>
                <div className={cs.answer}>Интернет</div>
                <div className={cs.answer}>Мобильная связь</div>
                <div className={cs.answer}>Уход за собой</div>
                <div className={cs.answer}>Одежда и обувь</div>
                <div className={cs.answer}>Медицина и лекарства</div>
                <div className={cs.answer}>Курение</div>
                <div className={cs.answer}>Фитнес</div>
                <div className={cs.answer}>Бассейн</div>
                <div className={cs.answer}>Продукты</div>
            </div>

            <div className={cs.nav_buttons}>
                <Link className={cs.button_back} to='/survey/step-seven'>
                    <span>&#60;</span> Назад
                </Link>
                <Link className={cs.button_skip} to='/survey/step-nine'>
                    Пропустить
                </Link>
                <Link className={cs.button_next} to='/survey/step-nine'>
                    Далее
                </Link>
            </div>
        </div>
    )
}
