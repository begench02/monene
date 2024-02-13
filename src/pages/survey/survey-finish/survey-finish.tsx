import { Link } from 'react-router-dom'
import styles from './survey-finish.module.sass'
import sticker from 'assets/sticker.png'

export const SurveyFinish = () => {
    return (
        <div className={styles.main}>
            <img src={sticker} alt='sticker' />
            <h2 className={styles.header}>Спасибо за пройденный опрос!</h2>
            <p className={styles.text}>Создаем ваш бюджет. Вам останется ввести то, что мы упустили и указать траты!</p>
            <Link to='/' className={styles.btn}>
                Отлично!
            </Link>
        </div>
    )
}
