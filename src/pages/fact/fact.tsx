import { Balance } from './balance/balance'
import styles from './fact.module.sass'
import { Squircle } from 'corner-smoothing'

export const Fact = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header_title}>Факт</div>
                <div className={styles.header_date}>Февраль</div>
            </div>
            <Balance />
        </div>
    )
}
