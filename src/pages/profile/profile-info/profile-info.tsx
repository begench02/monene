import Check from 'assets/check.svg'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import Edit from 'assets/edit.svg'
import styles from './profile-info.module.sass'
import { profileChangeInfo } from 'store/profile/profile.reducer'
import { ProfileInfoChangePassword } from './profile-info-change-password/profile-info-change-password'

export const ProfileInfo = () => {
	const { email, phone } = useAppSelector((state) => state.profile)
	const dispatch = useAppDispatch()
	const { register, handleSubmit } = useForm<FormFields>({ defaultValues: { email, phone } })
	const [isEdit, setEdit] = useState(false)
	const [isPasswordEdit, setPasswordOpen] = useState(false)

	const onFormSubmit: SubmitHandler<FormFields> = (data) => {
		dispatch(profileChangeInfo(data))
		setEdit(false)
	}

	return (
		<form className={styles.main} onSubmit={handleSubmit(onFormSubmit)}>
			<h2 className={styles.title}>Ваши данные</h2>
			<div className={styles.items}>
				<div className={styles.item}>
					<div>Почта</div>
					{isEdit ? (
						<div className={styles.edit_block}>
							<input className={styles.input} {...register('email')} />
							<button className={styles.check_block}>
								<Check />
							</button>
						</div>
					) : (
						<div className={styles.value}>{email}</div>
					)}
				</div>
				<div className={styles.item}>
					<div>Телефон</div>
					{isEdit ? (
						<div className={styles.edit_block}>
							<input className={styles.input} {...register('phone')} />
							<button className={styles.check_block}>
								<Check />
							</button>
						</div>
					) : (
						<>
							<div className={styles.value}>{phone}</div>
							<Edit className={styles.edit} onClick={() => setEdit(true)} />
						</>
					)}
				</div>
				<div className={styles.item}>
					<div>Пароль</div>
					<div className={styles.change_password} onClick={() => setPasswordOpen(true)}>
						Сменить пароль
					</div>
				</div>
				{isPasswordEdit && <ProfileInfoChangePassword close={() => setPasswordOpen(false)} />}
			</div>
		</form>
	)
}

type FormFields = {
	email: string
	phone: string
}
