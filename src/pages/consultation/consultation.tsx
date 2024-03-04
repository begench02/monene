import { ConsultationApplication } from './consultation-application/consultation-application'
import styles from './consultation.module.sass'

export const Consultation = () => {
	return (
		<div className={styles.main}>
			<ConsultationApplication close={() => {}} />
		</div>
	)
}
