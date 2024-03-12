import Arrow from 'assets/arrow-expand.svg'
import Google from 'assets/auth/google.svg'
import styles from './profile-external-accounts.module.sass'
import Telegram from 'assets/auth/telegram.svg'
import Vk from 'assets/auth/vk.svg'
import Yandex from 'assets/auth/yandex.svg'

export const ProfileExternalAccounts = () => {
	return (
		<div className={styles.main}>
			<h2 className={styles.title}>Внешние аккаунты</h2>
			<div className={styles.items}>
				<div className={styles.item}>
					<Vk className={styles.icon} />
					<div>
						<div className={styles.item_title}>VKontakte</div>
						<div className={styles.item_subtitle}>Андрей кабушев</div>
					</div>
					<Arrow className={styles.arrow} />
				</div>
				<div className={styles.item}>
					<Telegram className={styles.icon} />
					<div>
						<div className={styles.item_title}>Telegram</div>
						<div className={styles.item_subtitle}>@kabushev</div>
					</div>
					<Arrow className={styles.arrow} />
				</div>
				<div className={styles.item}>
					<Yandex className={styles.icon} />
					<div>
						<div className={styles.item_title}>Яндекс</div>
						<div className={styles.item_subtitle}>kabushev@ya.ru</div>
					</div>
					<Arrow className={styles.arrow} />
				</div>
				<div className={styles.item}>
					<Google className={styles.icon} />
					<div>
						<div className={styles.item_title}>Google</div>
						<div className={styles.item_subtitle}>kabushev@gmail.com</div>
					</div>
					<Arrow className={styles.arrow} />
				</div>
			</div>
		</div>
	)
}
