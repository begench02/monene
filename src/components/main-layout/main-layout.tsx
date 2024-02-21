import { Header } from '../header/header'
import { Outlet } from 'react-router-dom'
import styles from './main-layout.module.sass'

export const MainLayout = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
