import { Squircle } from 'corner-smoothing'
import styles from './balance.module.sass'

export const Balance = () => {
    return (
        <div className={styles.main}>
            <div className={styles.current_budget}>
                <h2 className={styles.current_budget_header}>Ваш баланс</h2>
                <div className={styles.current_budget_content}>
                    <div className={styles.balance}>1 100 000 ₽</div>
                    <div className={styles.buttons}>
                        <Squircle className={styles.refill} cornerRadius={10}>
                            Пополнить
                        </Squircle>
                        <Squircle className={styles.write_off} cornerRadius={10}>
                            Списать
                        </Squircle>
                    </div>
                </div>
            </div>
            <div className={styles.expenses}>
                <div className={styles.expenses_header}>
                    <div className={styles.title}>Ваши расходы</div>
                    <div className={styles.date}>с 5 мая 2024 по 4 июня 2024</div>
                </div>
                <div className={styles.expenses_content}>
                    <div>По плану</div>
                    <div>По факту</div>
                    <div>83 000 ₽/мес</div>
                    <div>83 000 ₽/мес</div>
                </div>
            </div>
        </div>
    )
}
