import { Link } from 'react-router-dom'
import { Squircle } from 'corner-smoothing'
import sticker from 'assets/happy-sticker.png'
import styles from './survey-finish.module.sass'

export const SurveyFinish = () => {
    return (
        <div className={styles.main}>
            <img src={sticker} alt='sticker' />
            <h2 className={styles.header}>Спасибо за пройденный опрос!</h2>
            <p className={styles.text}>Создаем ваш бюджет. Вам останется ввести то, что мы упустили и указать траты!</p>
            <Squircle cornerRadius={20} as={Link} to='/' className={styles.btn}>
                Отлично!
            </Squircle>
        </div>
    )
}
