import { Squircle } from 'corner-smoothing'
import AddCircle from 'assets/add-circle.svg'
import styles from './budget.module.sass'
import { BudgetSection } from './budget-section/budget-section'

export const Budget = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Бюджет</h2>

            <div className={styles.content}>
                <div className={styles.income}>
                    <div className={styles.income_header}>
                        <div className={styles.income_header_title}>
                            <h3>Расходы</h3>
                            <Squircle cornerRadius={15} className={styles.income_header_month}>
                                80 000 &#8381;/мес
                            </Squircle>
                        </div>
                        <div className={styles.income_header_subtitle}>
                            <div>
                                Создать группу <AddCircle className={styles.add_circle} />
                            </div>
                            <Squircle className={styles.income_header_year} cornerRadius={5}>
                                1 200 000 ₽/год
                            </Squircle>
                        </div>
                    </div>
                    <BudgetSection />
                </div>
                <div className={styles.income}>
                    <div className={styles.income_header}>
                        <div className={styles.income_header_title}>
                            <h3>Доходы</h3>
                            <Squircle cornerRadius={15} className={styles.income_header_month}>
                                100 000 &#8381;/мес
                            </Squircle>
                        </div>
                        <div className={styles.income_header_subtitle}>
                            <div></div>
                            <Squircle className={styles.income_header_year} cornerRadius={5}>
                                1 600 000 ₽/год
                            </Squircle>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
