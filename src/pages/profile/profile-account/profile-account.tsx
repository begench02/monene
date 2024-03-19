import { ChangeEvent, useState } from 'react'
import { profileChangeName } from 'store/profile/profile.reducer'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import Check from 'assets/check.svg'
import Edit from 'assets/edit.svg'
import profile from 'assets/profile.png'
import styles from './profile-account.module.sass'

export const ProfileAccount = () => {
	const { name, id } = useAppSelector((state) => state.profile)
	const dispatch = useAppDispatch()
	const [isEdit, setEdit] = useState(true)
	const [newName, setNewName] = useState(name)

	return (
		<div className={styles.main}>
			<div className={styles.icon}>
				<img src={profile} alt='profile' />
				<div className={styles.plus}>Plus</div>
			</div>
			<div className={styles.info}>
				{isEdit ? (
					<div className={styles.name_edit_block}>
						<input
							className={styles.input}
							value={newName}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
						/>
						<div
							className={styles.check_mark}
							onClick={() => {
								dispatch(profileChangeName({ name: newName }))
								setEdit(false)
							}}
						>
							<Check />
						</div>
					</div>
				) : (
					<div className={styles.name__block}>
						<h2 className={styles.name__text}>{name}</h2>
						<div className={styles.edit}>
							<Edit onClick={() => setEdit(true)} />
						</div>
					</div>
				)}

				<div className={styles.id}>ID: {id}</div>
			</div>
		</div>
	)
}
