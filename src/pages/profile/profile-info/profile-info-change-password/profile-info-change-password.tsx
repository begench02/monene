import { FC } from 'react'
import { Squircle } from 'corner-smoothing'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './profile-info-change-password.module.sass'

export const ProfileInfoChangePassword: FC<Props> = (props) => {
    const {close} = props
	const { register, handleSubmit } = useForm<FormFields>()

	const onFormSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data)
	}

	return (
		<form className={styles.main} onSubmit={handleSubmit(onFormSubmit)}>
			<div className={styles.input_block}>
				<label htmlFor='new_password'>Новый пароль</label>
				<input {...register('new_password')} id='new_password' />
			</div>
			<div className={styles.input_block}>
				<label htmlFor='new_password_repeat'>Повторите пароль</label>
				<input {...register('new_password_repeat')} id='new_password_repeat' />
			</div>
            <div className={styles.buttons}>
                <Squircle className={styles.confirm} cornerRadius={10}>Применить</Squircle>
                <div className={styles.cancel} onClick={close}>Отменить</div>
            </div>
		</form>
	)
}

type Props = {
    close: VoidFunction
}

type FormFields = {
	new_password: string
	new_password_repeat: string
}
