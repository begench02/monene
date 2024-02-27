import styles from './plan.module.sass'
import { Salary } from './salary/salary'

export const Plan = () => {
    return (
        <div className={styles.main}>
            <Salary />
            <Salary />
        </div>
    )
}
