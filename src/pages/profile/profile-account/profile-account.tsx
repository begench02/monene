import styles from './profile-account.module.sass'
import Edit from 'assets/edit.svg'
import profile from 'assets/profile.png'

export const ProfileAccount = () => {
	return (
		<div className={styles.main}>
			<div className={styles.icon}>
				<img src={profile} alt='profile' />
				<div className={styles.plus}>Plus</div>
			</div>
			<div className={styles.info}>
				<div className={styles.name__block}>
					<h2 className={styles.name__text}>Андрей Кабушев</h2>
					<div className={styles.edit}>
						<Edit />
					</div>
				</div>
				<div className={styles.id}>ID: 2894723487</div>
			</div>
		</div>
	)
}
