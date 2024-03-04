import { FC, useState } from 'react'
import clsx from 'clsx'
import Delete from 'assets/delete.svg'
import Down from 'assets/bottom.svg'
import Edit from 'assets/edit.svg'
import styles from './fact-account-setting.module.sass'
import Up from 'assets/up.svg'
import { DeleteModal } from 'components/delete-modal/delete-modal'

export const FactAccountSetting: FC<Props> = (props) => {
	const { moveUpFn, moveDownFn, deleteFn } = props
	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

	return (
		<div className={styles.main}>
			<div className={styles.item}>
				<Edit className={styles.icon} />
				<div className={styles.item_text}>Изменить название</div>
			</div>
			<div className={styles.item} onClick={moveUpFn}>
				<Up className={styles.icon} />
				<div className={styles.item_text}>Вверх</div>
			</div>
			<div className={styles.item} onClick={moveDownFn}>
				<Down className={styles.icon} />
				<div className={styles.item_text}>Вниз</div>
			</div>
			<div className={styles.item} onClick={() => setDeleteModalOpen(true)}>
				<Delete className={styles.icon} />
				<div className={clsx(styles.item_text, styles.item_text_delete)}>Удалить</div>
			</div>
			{isDeleteModalOpen && (
				<DeleteModal
					text='Накопленная сумма на счету переведется на баланс. Вы действительно хотите закрыть счет?'
					close={() => setDeleteModalOpen(false)}
					confirm={() => deleteFn}
					style={{
						width: '318px',
						height: '150px',
					}}
				/>
			)}
		</div>
	)
}

type Props = {
	deleteFn: VoidFunction
	moveUpFn: VoidFunction
	moveDownFn: VoidFunction
}
