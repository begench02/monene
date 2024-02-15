import { Link } from 'react-router-dom'
import { regex } from 'src/utils/regex'
import { useForm, SubmitHandler } from 'react-hook-form'
import clsx from 'clsx'
import cs from '../auth.module.sass'
import google from 'assets/auth/google.png'
import logo from 'assets/logo.png'
import styles from './sign-up.module.sass'
import telegram from 'assets/auth/telegram.png'
import vk from 'assets/auth/vk.png'
import xMark from 'assets/auth/x-mark.png'
import yandex from 'assets/auth/yandex.png'

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        resetField,
        formState: { dirtyFields, isValid, errors },
    } = useForm<SignUpForm>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onTouched',
    })

    const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.main}>
            <form className={styles.container} onSubmit={handleSubmit(handleFormSubmit)}>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>
                <div className={styles.tabs}>
                    <Link className={styles.enter} to='/auth/sign-in'>
                        Войти
                    </Link>
                    <div className={styles.registration}>Регистрация</div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.email_block}>
                        <input
                            className={clsx(styles.email, errors.email && styles.input_error)}
                            placeholder='Ваш e-mail'
                            type='email'
                            {...register('email', {
                                required: 'Email обязателен',
                                pattern: {
                                    value: regex.email,
                                    message: 'Неверный формат email-а',
                                },
                            })}
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
                            {...register('password', {
                                required: 'Пароль обязателен',
                                pattern: {
                                    value: regex.password,
                                    message: 'Неверный формат пароля',
                                },
                            })}
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

                <button className={clsx(styles.enter_block, isValid && styles.enter_block_active)} disabled={!isValid}>
                    Зарегистрироваться
                </button>
                {<p className={cs.error_text}>{errors.email?.message}</p>}
                {<p className={cs.error_text}>{errors.password?.message}</p>}

                {/* Social apps' authentication */}
                <div className={styles.enter_with__block}>
                    <p>Регистрация с помощью</p>
                </div>
                <div className={styles.socials}>
                    <img className={styles.social} src={vk} alt='vk' />
                    <img className={styles.social} src={telegram} alt='telegram' />
                    <img className={styles.social} src={yandex} alt='yandex' />
                    <img className={styles.social} src={google} alt='google' />
                </div>
            </form>
        </div>
    )
}

type SignUpForm = {
    email: string
    password: string
}
