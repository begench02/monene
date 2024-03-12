import styles from './profile-info.module.sass'

export const ProfileInfo = () => {
	return (
		<div className={styles.main}>
			<h2 className={styles.title}>Ваши данные</h2>
			<div className={styles.items}>
				<div className={styles.item}>
					<div>Почта</div>
					<div className={styles.value}>tuvvi@ya.ru</div>
				</div>
				<div className={styles.item}>
					<div>Телефон</div>
					<div className={styles.value}>+7 (999) 800-50-10</div>
				</div>
				<div className={styles.item}>
					<div>Пароль</div>
					<div className={styles.change_password}>Сменить пароль</div>
				</div>
			</div>
		</div>
	)
}
