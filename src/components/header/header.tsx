import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import Logo from 'assets/logo.svg'
import profile from 'assets/profile.png'
import styles from './header.module.sass'

export const Header = () => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <header className={styles.main}>
            <Logo width={150} height={25} />
            <menu className={styles.menu}>
                <NavLink
                    className={({ isActive }) => clsx(isActive ? styles.menu_item__active : null, styles.menu_item)}
                    to='/budget'
                >
                    Бюджет
                </NavLink>
                <NavLink
                    className={({ isActive }) => clsx(isActive ? styles.menu_item__active : null, styles.menu_item)}
                    to='/plan'
                >
                    План
                </NavLink>
                <NavLink
                    className={({ isActive }) => clsx(isActive ? styles.menu_item__active : null, styles.menu_item)}
                    to='/fact'
                >
                    Факт
                </NavLink>
                <NavLink
                    className={({ isActive }) => clsx(isActive ? styles.menu_item__active : null, styles.menu_item)}
                    to='/consultation'
                >
                    Консультации
                </NavLink>
            </menu>
            <div className={styles.profile}>
                <img src={profile} alt='profile' width={40} height={40} />
                <p className={styles.profile_name}>Андрей Кабушев</p>
            </div>
        </header>
    )
}
