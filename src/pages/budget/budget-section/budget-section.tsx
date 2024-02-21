import { Squircle } from 'corner-smoothing'
import More from 'assets/more.svg'
import styles from './budget-section.module.sass'

const items = [
    {
        name: 'Арендую квартиру',
        debit: 'Зарплата',
        sum: '30 000 ₽',
    },
    {
        name: 'Продукты',
        debit: '50 на 50',
        sum: '20 000 ₽',
    },
    {
        name: 'Интернет',
        debit: 'Аванс',
        sum: '20 000 ₽',
    },
]

export const BudgetSection = () => {
    return (
        <Squircle className={styles.main} cornerRadius={5}>
            <div className={styles.header}>
                <div>🏠 Жильё</div>
                <div className={styles.header_price}>120 000 ₽/мес</div>
            </div>
            <div>
                <div className={styles.content_header}>
                    <div>Название</div>
                    <div>Откада списывать</div>
                    <div>Сумма</div>
                </div>
                {items.map(({ name, debit, sum }) => (
                    <div className={styles.content_items}>
                        <div>{name}</div>
                        <div>{debit}</div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            {sum} <More width={25} height={25} />
                        </div>
                    </div>
                ))}
            </div>
        </Squircle>
    )
}
