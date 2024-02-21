import { Link } from 'react-router-dom'
import { regex } from 'src/utils/regex'
import { useForm, SubmitHandler } from 'react-hook-form'
import clsx from 'clsx'
import cs from '../auth.module.sass'
import Google from 'assets/auth/google.svg'
import Logo from 'assets/logo.svg'
import styles from './sign-up.module.sass'
import Telegram from 'assets/auth/telegram.svg'
import Vk from 'assets/auth/vk.svg'
import Yandex from 'assets/auth/yandex.svg'
import { Squircle } from 'corner-smoothing'

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
        <Squircle cornerRadius={10} className={styles.main}>
            <form className={styles.container} onSubmit={handleSubmit(handleFormSubmit)}>
                <Logo className={styles.logo} />
                <Squircle cornerRadius={10} className={styles.tabs}>
                    <Link className={styles.enter} to='/auth/sign-in'>
                        Войти
                    </Link>
                    <Squircle cornerRadius={6} className={styles.registration}>
                        Регистрация
                    </Squircle>
                </Squircle>
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
                            <div className={styles.input_clear} onClick={() => resetField('email')}>
                                &#10005;
                            </div>
                        )}
                    </div>
                    <div className={styles.password_block}>
                        <input
                            className={clsx(styles.password, errors.password && styles.input_error)}
                            placeholder='Пароль'
                            type='password'
                            {...register('password', {
                                required: 'Пароль обязателен',
                            })}
                        />
                        {dirtyFields.password && (
                            <div className={styles.input_clear} onClick={() => resetField('password')}>
                                &#10005;
                            </div>
                        )}
                    </div>
                </div>

                <Squircle
                    cornerRadius={10}
                    as='button'
                    className={clsx(styles.enter_block, isValid && styles.enter_block_active)}
                    // @ts-ignore
                    disabled={!isValid}
                >
                    Зарегистрироваться
                </Squircle>
                {<p className={cs.error_text}>{errors.email?.message}</p>}
                {<p className={cs.error_text}>{!errors.email && errors.password?.message}</p>}

                {/* Social apps' authentication */}
                <div className={styles.enter_with__block}>
                    <p>Регистрация с помощью</p>
                </div>
                <div className={styles.socials}>
                    <Vk className={styles.social} />
                    <Telegram className={styles.social} />
                    <Yandex className={styles.social} />
                    <Google className={styles.social} />
                </div>
            </form>
        </Squircle>
    )
}

type SignUpForm = {
    email: string
    password: string
}
