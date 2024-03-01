import { FactAccount } from './fact-account/fact-account'
import { FactBalance } from './fact-balance/fact-balance'
import { FactExpenseHistory } from './fact-expense-history/fact-expense-history'
import { FactGoals } from './fact-goals/fact-goals'
import { FactUpcomingArrivals } from './fact-upcoming-arrivals/fact-upcoming-arrivals'
import styles from './fact.module.sass'

export const Fact = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header_title}>Факт</div>
                <div className={styles.header_date}>Февраль</div>
            </div>
            <FactBalance />
            <div className={styles.content}>
                <div>
                    <FactUpcomingArrivals />
                    <FactExpenseHistory />
                </div>
                <div>
                    <FactAccount />
                    <FactGoals />
                </div>
            </div>
        </div>
    )
}
