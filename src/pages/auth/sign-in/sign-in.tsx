import { Link } from 'react-router-dom'
import google from 'assets/auth/google.png'
import logo from 'assets/logo.png'
import styles from './sign-in.module.sass'
import telegram from 'assets/auth/telegram.png'
import vk from 'assets/auth/vk.png'
import yandex from 'assets/auth/yandex.png'

export const SignIn = () => {

    
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>
                <div className={styles.tabs}>
                    <div className={styles.enter}>Войти</div>
                    <div>Регистрация</div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.email_block}>
                        <input className={styles.email} placeholder='Ваш e-mail' />
                    </div>
                    <div className={styles.password_block}>
                        <input className={styles.password} placeholder='Пароль' />
                    </div>
                </div>
                <div className={styles.forgot_password}>
                    <Link to="/auth/account-recovery">Забыли пароль?</Link>
                </div>
                <div className={styles.enter_block}>
                    <button className={styles.enter_button}>Войти</button>
                </div>

                {/* Social apps' authentication */}
                <div className={styles.enter_with_block}>
                    <p>Вход с помощью</p>
                </div>
                <div className={styles.socials}>
                    <div>
                        <img src={vk} alt='vk' />
                    </div>
                    <div>
                        <img src={telegram} alt='telegram' />
                    </div>
                    <div>
                        <img src={yandex} alt='yandex' />
                    </div>
                    <div>
                        <img src={google} alt='google' />
                    </div>
                </div>
            </div>
        </div>
    )
}
