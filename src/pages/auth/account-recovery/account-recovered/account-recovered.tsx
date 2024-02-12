import styles from './account-recovered.module.sass'

export const AccountRecovered = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>Ваш аккаунт восстановлен!</div>
            <div className={styles.text}>Чтобы авторизоваться введите новый пароль</div>
            <button className={styles.go_to_main}>На главную</button>
        </div>
    )
}
