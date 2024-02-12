import { Link } from 'react-router-dom'
import { regex } from 'src/utils/regex'
import { useForm, SubmitHandler } from 'react-hook-form'
import clsx from 'clsx'
import google from 'assets/auth/google.png'
import logo from 'assets/logo.png'
import styles from './sign-in.module.sass'
import telegram from 'assets/auth/telegram.png'
import vk from 'assets/auth/vk.png'
import xMark from 'assets/auth/x-mark.png'
import yandex from 'assets/auth/yandex.png'

export const SignIn = () => {
    const {
        register,
        handleSubmit,
        resetField,
        formState: { dirtyFields, isValid, errors },
    } = useForm<SignInForm>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onTouched',
    })

    const handleFormSubmit: SubmitHandler<SignInForm> = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.main}>
            <form className={styles.container} onSubmit={handleSubmit(handleFormSubmit)}>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>
                <div className={styles.tabs}>
                    <div className={styles.enter}>Войти</div>
                    <Link className={styles.registration} to='/auth/sign-up'>Регистрация</Link>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.email_block}>
                        <input
                            className={clsx(styles.email, errors.email && styles.input_error)}
                            placeholder='Ваш e-mail'
                            type='email'
                            {...register('email', { required: true, pattern: regex.email })}
                        />
                        {dirtyFields.email && (
                            <img
                                className={styles.input_clear}
                                src={xMark}
                                alt='clear'
                                onClick={() => resetField('email')}
                            />
                        )}
                    </div>
                    <div className={styles.password_block}>
                        <input
                            className={clsx(styles.password, errors.password && styles.input_error)}
                            placeholder='Пароль'
                            type='password'
                            {...register('password', { required: true, pattern: regex.password })}
                        />
                        {dirtyFields.password && (
                            <img
                                className={styles.input_clear}
                                src={xMark}
                                alt='clear'
                                onClick={() => resetField('password')}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.forgot_password}>
                    <Link to='/auth/account-recovery'>Забыли пароль?</Link>
                </div>
                <button className={clsx(styles.enter_block, isValid && styles.enter_block_active)} disabled={!isValid}>
                    Войти
                </button>

                {/* Social apps' authentication */}
                <div className={styles.enter_with__block}>
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
            </form>
        </div>
    )
}

type SignInForm = {
    email: string
    password: string
}
