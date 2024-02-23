import { BudgetSection } from './budget-section/expenses-section'
import { IncomeSection } from './income-section/income-section'
import { Squircle } from 'corner-smoothing'
import { useAppSelector } from 'src/hooks'
import { useState } from 'react'
import AddCircle from 'assets/add-circle.svg'
import styles from './budget.module.sass'
import { CreateGroup } from './create-group/create-group'

export const Budget = () => {
    const [isCreateGroupOpen, setCreateGroupOpen] = useState(false)
    const budgetState = useAppSelector((state) => state.budget)

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Бюджет</h2>

            <div className={styles.content}>
                <div className={styles.income}>
                    <div className={styles.income_header}>
                        <div className={styles.income_header_title}>
                            <h3>Расходы</h3>
                            <Squircle className={styles.income_header_month} cornerRadius={8}>
                                {budgetState.totalAmount}
                            </Squircle>
                        </div>
                        <div className={styles.income_header_subtitle}>
                            <div onClick={() => setCreateGroupOpen(true)}>
                                Создать группу <AddCircle className={styles.add_circle} />
                            </div>
                            <Squircle className={styles.income_header_year} cornerRadius={5}>
                                1 200 000 ₽/год
                            </Squircle>
                        </div>
                    </div>
                    {isCreateGroupOpen && <CreateGroup close={() => setCreateGroupOpen(false)}/>}
                    {budgetState.groups.map((group) => (
                        <BudgetSection group={group} />
                    ))}
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
                    <IncomeSection type='main' />
                    <IncomeSection type='additional' />
                </div>
            </div>
        </div>
    )
}
