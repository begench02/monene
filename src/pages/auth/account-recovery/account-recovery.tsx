import { Link } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import styles from './account-recovery.module.sass'

export const AccountRecovery = () => {
    const [code, setCode] = useState('')

    return (
        <div className={styles.main}>
            <div>
                <h2 className={styles.header}>Восстановление аккаунта</h2>
            </div>
            <div className={styles.text}>Для подтверждения действия мы отправили на вашу почту письмо с кодом</div>
            <div className={styles.code_input__block}>
                <input
                    className={styles.code_input}
                    type='text'
                    placeholder='Введите код'
                    value={code}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                />
                <div className={styles.code_input_clear} onClick={() => setCode('')}>
                    &#10005;
                </div>
            </div>
            <button className={styles.confirm}>Подтвердить</button>
            <Link className={styles.resend_code} to='#'>
                Выслать код повторно
            </Link>
            <Link className={styles.go_back} to='#'>
                Назад
            </Link>
        </div>
    )
}
