import { useAppSelector } from 'hooks/redux.hook'
import styles from './consultations-table.module.sass'

export const ConsultationsTable = () => {
	const consultations = useAppSelector((state) => state.consultation)

	if (consultations.length === 0) {
		return <div className={styles.no_consultations}></div>
	}

	return (
		<div>
			<div className={styles.header}>
				<div>Прошедшие сеансы</div>
				<div>Статус</div>
				<div>Дата</div>
				<div>Рекомендации</div>
			</div>
		</div>
	)
}
