import { Outlet } from 'react-router-dom'
import styles from './account-recovery.module.sass'

export const AccountRecovery = () => {
    return (
        <div className={styles.main}>
            <Outlet />
        </div>
    )
}
