import { Link } from 'react-router-dom'
import styles from './account-recovery-successful.module.sass'

export const AccountRecoverySuccessful = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>Ваш аккаунт восстановлен!</div>
            <div className={styles.text}>Чтобы авторизоваться введите новый пароль</div>
            <button className={styles.go_to_main}>
                <Link to='/'>На главную</Link>
            </button>
        </div>
    )
}
