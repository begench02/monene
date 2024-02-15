import { Outlet } from 'react-router-dom'
import styles from './survey.module.sass'

export const Survey = () => {
    return (
        <div className={styles.main}>
            <Outlet />
        </div>
    )
}
