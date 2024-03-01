import { convertToRuble } from 'utils/index'
import styles from './fact-expense-history.module.sass'

const items = [
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Без категории',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
    {
        date: '25 февраля 2024',
        forWhat: 'Еда',
        sum: 7_000,
    },
]

export const FactExpenseHistory = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>История расходов</div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div>Дата</div>
                    <div>На что</div>
                    <div className={styles.sum}>Сумма</div>
                </div>
                {items.map((item) => (
                    <div className={styles.item}>
                        <div>{item.date}</div>
                        <div className={styles.forWhat}>{item.forWhat}</div>
                        <div className={styles.sum}>- {convertToRuble(item.sum)}</div>
                    </div>
                ))}
                <div className={styles.load_more}>Загрузить еще</div>
            </div>
        </div>
    )
}
