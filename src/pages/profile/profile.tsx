import { ProfileAccount } from './profile-account/profile-account'
import { ProfileAccountDeleteModal } from './profile-account-delete-modal/profile-account-delete-modal'
import { ProfileCancelSubscription } from './profile-cancel-subscription/profile-cancel-subscription'
import { ProfileCard } from './profile-card/profile-card'
import { ProfileExternalAccounts } from './profile-external-accounts/profile-external-accounts'
import { ProfileInfo } from './profile-info/profile-info'
import { Squircle } from 'corner-smoothing'
import { useState } from 'react'
import styles from './profile.module.sass'
import { ProfileOpenMorePossibilities } from './profile-open-more-possibilities/profile-open-more-possibilities'

export const Profile = () => {
	const [isDeleteAccountModalOpen, setDeleteAccountModalOpen] = useState(false)

	return (
		<div>
			<div className={styles.profile_account}>
				<ProfileAccount />
			</div>
			<div className={styles.info}>
				<ProfileInfo />
				<ProfileCard connected={true} />
			</div>
			<div className={styles.external_accounts}>
				<ProfileExternalAccounts />
			</div>
			<div className={styles.buttons}>
				<Squircle cornerRadius={10} className={styles.log_out_btn}>
					Выйти из аккаунта
				</Squircle>
				<div className={styles.delete_account} onClick={() => setDeleteAccountModalOpen(true)}>
					Удалить аккаунт
				</div>
			</div>

			{/* {isDeleteAccountModalOpen && (
				<ProfileAccountDeleteModal close={() => setDeleteAccountModalOpen(false)} confirm={() => {}} />
			)} */}
			{/* <ProfileCancelSubscription /> */}
			{/* <ProfileAccountDeleteModal close={() => setDeleteAccountModalOpen(false)} confirm={() => {}} /> */}
			{/* <ProfileOpenMorePossibilities /> */}
		</div>
	)
}
