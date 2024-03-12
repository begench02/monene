import { useState } from 'react'
import { ProfileAccount } from './profile-account/profile-account'
import { ProfileExternalAccounts } from './profile-external-accounts/profile-external-accounts'
import { ProfileInfo } from './profile-info/profile-info'
import styles from './profile.module.sass'
import { Squircle } from 'corner-smoothing'
import { ProfileAccountDeleteModal } from './profile-account-delete-modal/profile-account-delete-modal'

export const Profile = () => {
	const [isDeleteAccountModalOpen, setDeleteAccountModalOpen] = useState(true)

	return (
		<div>
			<Squircle cornerRadius={10} className={styles.log_out_btn}>
				Выйти из аккаунта
			</Squircle>
			<div className={styles.delete_account} onClick={() => setDeleteAccountModalOpen(true)}>
				Удалить аккаунт
			</div>
			{isDeleteAccountModalOpen && (
				<ProfileAccountDeleteModal close={() => setDeleteAccountModalOpen(false)} confirm={() => {}} />
			)}
		</div>
	)
}
