import { convertToRuble } from 'utils/index'
import styles from './fact-upcoming-arrivals.module.sass'

const items = [
    {
        date: '25 февраля',
        arrival: 'Аванс',
        sum: 30_000,
    },
    {
        date: '26 февраля',
        arrival: 'Сдача квартиры',
        sum: 20_000,
    },
    {
        date: '14 декабря 2023',
        arrival: 'Премия',
        sum: 20_000,
    },
]

export const FactUpcomingArrivals = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>Ближайшие поступления</div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div>Дата</div>
                    <div>Поступления</div>
                    <div className={styles.sum}>Сумма</div>
                </div>
                {items.map((item) => (
                    <div className={styles.item}>
                        <div>{item.date}</div>
                        <div className={styles.arrival}>{item.arrival}</div>
                        <div className={styles.sum}>{convertToRuble(item.sum)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
