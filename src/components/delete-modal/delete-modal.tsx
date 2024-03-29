import { CSSProperties, FC } from 'react'
import styles from './delete-modal.module.sass'

export const DeleteModal: FC<Props> = (props) => {
	const { close, confirm, text, style } = props

	return (
		<div className={styles.main} style={style}>
			<div className={styles.title}>{text}</div>
			<div className={styles.buttons}>
				<div className={styles.yes} onClick={confirm}>
					<p>Да</p>
				</div>
				<div className={styles.no} onClick={close}>
					<p>Нет</p>
				</div>
			</div>
		</div>
	)
}

type Props = {
	close: VoidFunction
	confirm: VoidFunction
	text: string
	style?: CSSProperties
}
