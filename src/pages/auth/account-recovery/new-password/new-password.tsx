import { useForm } from 'react-hook-form'
import checkMark from 'assets/auth/check-mark.png'
import eye from 'assets/auth/eye.png'
import eyeSlash from 'assets/auth/eye-slash.png'
import styles from './new-password.module.sass'
import { useState } from 'react'
import xMark from 'assets/auth/x-mark.png'

export const NewPassword = () => {
    const {
        register,
        watch,
        formState: { isValid, isDirty, touchedFields },
    } = useForm<NewPasswordForm>({ mode: 'onTouched' })

    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const changePasswordVisible = () => {
        setPasswordVisible((prev) => !prev)
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.header}>Придумайте новый пароль</h2>
            <div className={styles.text__block}>
                <p className={styles.text}>
                    Вы восстановили доступ к аккаунту, теперь вам необходимо придумать новый пароль
                </p>
            </div>

            <form className={styles.form}>
                <div className={styles.form_item}>
                    <label className={styles.input_label} htmlFor='password'>
                        Новый пароль
                    </label>
                    <div className={styles.input__block}>
                        <input
                            className={styles.input}
                            placeholder='Введите пароль'
                            type={isPasswordVisible ? 'text' : 'password'}
                            id='password'
                            {...register('password', { required: true })}
                        />
                        {isPasswordVisible ? (
                            <img className={styles.eye} src={eyeSlash} onClick={changePasswordVisible} />
                        ) : (
                            <img className={styles.eye} src={eye} alt='eye' onClick={changePasswordVisible} />
                        )}

                        {touchedFields.password ? (
                            isValid ? (
                                <img className={styles.checkMark} src={checkMark} alt='check mark' />
                            ) : (
                                <img className={styles.checkMark} src={xMark} alt='x' />
                            )
                        ) : null}
                    </div>
                </div>
                <div className={styles.form_item}>
                    <label className={styles.input_label} htmlFor='confirm_password'>
                        Повторите пароль
                    </label>
                    <div className={styles.input__block}>
                        <input
                            className={styles.input}
                            placeholder='Повторите пароль'
                            type={isPasswordVisible ? 'text' : 'password'}
                            id='confirm_password'
                            {...register('confirm_password', {
                                required: true,
                                validate: (val: string) => {
                                    if (watch('password') != val) {
                                        return 'Пароли не совпадают'
                                    }
                                },
                            })}
                        />
                        {isPasswordVisible ? (
                            <img
                                className={styles.eye}
                                src={eyeSlash}
                                alt='eye slash'
                                onClick={changePasswordVisible}
                            />
                        ) : (
                            <img className={styles.eye} src={eye} alt='eye' onClick={changePasswordVisible} />
                        )}
                        {touchedFields.confirm_password ? (
                            isValid ? (
                                <img className={styles.checkMark} src={checkMark} alt='check mark' />
                            ) : (
                                <img className={styles.checkMark} src={xMark} alt='x' />
                            )
                        ) : null}
                    </div>
                </div>
                <button className={styles.confirm} disabled={!isValid}>
                    Подтвердить
                </button>
            </form>
        </div>
    )
}

type NewPasswordForm = {
    password: string
    confirm_password: string
}
