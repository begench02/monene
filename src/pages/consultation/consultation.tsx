import { ConsultationApplication } from './consultation-application/consultation-application'
import { ConsultationsTable } from './consultation-table/consultations-table'
import styles from './consultation.module.sass'

export const Consultation = () => {
	return (
		<div className={styles.main}>
			<ConsultationsTable />
		</div>
	)
}
