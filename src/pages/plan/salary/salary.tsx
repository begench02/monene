import { clsx } from 'clsx'
import { convertToRuble } from 'src/utils/utils'
import { DeleteModal } from 'src/components/delete-modal/delete-modal'
import { SalaryCreateItem } from './salary-create-item/salary-create-item'
import { SalaryEditItem } from './salary-edit-item/salary-edit-item'
import { Squircle } from 'corner-smoothing'
import { useOutsideClick } from 'src/hooks/useOutsideClick.hook'
import { useState } from 'react'
import Delete from 'assets/delete.svg'
import Edit from 'assets/edit.svg'
import More from 'assets/more.svg'
import Plus from 'assets/add-circle.svg'
import styles from './salary.module.sass'

export type EARNING = {
    name: string
    price: number
}

const earnings: EARNING[] = [
    {
        name: 'Зарплата',
        price: 30000,
    },
    {
        name: 'Сдаю квартиру',
        price: 30000,
    },
    {
        name: 'Донат',
        price: 30000,
    },
]

const expenses = [
    {
        name: 'Расход №1',
        price: 30_000,
    },
    {
        name: 'Расход №2',
        price: 30_000,
    },
    {
        name: 'Расход №3',
        price: 30_000,
    },
    {
        name: 'Расход №4',
        price: 30_000,
    },
    {
        name: 'Расход №5',
        price: 30_000,
    },
]

const getTotalIncomePrice = () => {
    let total_price = 0

    for (let earning of earnings) {
        total_price += earning.price
    }

    return total_price
}

export const Salary = () => {
    const [earningsItemSettingsOpen, setEarningsItemSettingsOpen] = useState('')
    const [isEarningsDeleteModalOpen, setEarningsDeleteModalOpen] = useState('')
    const [earningsAddNewItemMenuOpen, setEarningsAddNewItemMenuOpen] = useState(false)
    const [earningsEditItemMenuOpen, setEarningsEditItemMenuOpen] = useState('')
    const earningsSettingRef = useOutsideClick(() => setEarningsItemSettingsOpen(''))

    const [expensesItemSettingsOpen, setExpensesItemSettingsOpen] = useState('')
    const [isExpensesDeleteModalOpen, setExpensesDeleteModalOpen] = useState('')
    const [expensesEditItemMenuOpen, setExpensesEditItemMenuOpen] = useState('')
    const [expensesAddNewItemMenuOpen, setExpensesAddNewItemMenuOpen] = useState(false)

    const expensesSettingsRef = useOutsideClick(() => setExpensesItemSettingsOpen(''))

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.header_title}>
                    <h3>Зарплата</h3>
                    <Squircle cornerRadius={10} className={styles.header_title_date}>
                        <p>5 февраля</p>
                    </Squircle>
                </div>
                <div className={styles.header_subtitle}>
                    <p>Разница</p>
                    <Squircle cornerRadius={10} className={styles.header_price}>
                        {convertToRuble(30_000)}
                    </Squircle>
                </div>
            </div>

            {/* EARNINGS (INCOME) */}
            <div className={styles.section}>
                <div className={styles.section_header}>
                    <div className={styles.section_header_title}>Доходы</div>
                    <Squircle className={styles.section_header_price} cornerRadius={10}>
                        {convertToRuble(getTotalIncomePrice())}
                    </Squircle>
                </div>
                <div className={styles.section_item_block} ref={earningsSettingRef}>
                    {earnings.map((earning) => {
                        return earningsEditItemMenuOpen === earning.name ? (
                            <SalaryEditItem close={() => setEarningsEditItemMenuOpen('')} item={earning} />
                        ) : (
                            <div className={styles.section_item}>
                                <div>{earning.name}</div>
                                <div>{convertToRuble(earning.price)}</div>
                                <More
                                    className={styles.more}
                                    onClick={() => setEarningsItemSettingsOpen(earning.name)}
                                />
                                {earningsItemSettingsOpen === earning.name && (
                                    <div className={styles.settings}>
                                        <div
                                            className={styles.setting}
                                            onClick={() => setEarningsEditItemMenuOpen(earning.name)}
                                        >
                                            <Edit className={styles.icon} /> Изменить
                                        </div>
                                        <div
                                            className={clsx(styles.setting, styles.setting_delete)}
                                            onClick={() => setEarningsDeleteModalOpen(earning.name)}
                                        >
                                            <Delete className={styles.icon} />
                                            Удалить
                                        </div>
                                    </div>
                                )}
                                {isEarningsDeleteModalOpen === earning.name && (
                                    <DeleteModal
                                        text='Вы действительно хотите
                            удалить доход?'
                                        close={() => setEarningsDeleteModalOpen('')}
                                        confirm={() => {
                                            setEarningsDeleteModalOpen('    ')
                                        }}
                                    />
                                )}
                            </div>
                        )
                    })}
                    <div className={styles.section_add_new_element} onClick={() => setEarningsAddNewItemMenuOpen(true)}>
                        Разовый доход <Plus />
                    </div>
                    {earningsAddNewItemMenuOpen && (
                        <SalaryCreateItem close={() => setEarningsAddNewItemMenuOpen(false)} />
                    )}
                </div>
            </div>

            {/* EXPENSES */}
            <div className={styles.section}>
                <div className={styles.section_header}>
                    <div className={styles.section_header_title}>Расходы</div>
                    <Squircle className={styles.section_header_price} cornerRadius={10}>
                        {convertToRuble(getTotalIncomePrice())}
                    </Squircle>
                </div>
                <div className={styles.section_item_block} ref={expensesSettingsRef}>
                    {expenses.map((expense) => {
                        return expensesEditItemMenuOpen === expense.name ? (
                            <SalaryEditItem close={() => setExpensesEditItemMenuOpen('')} item={expense} />
                        ) : (
                            <div className={styles.section_item}>
                                <div>{expense.name}</div>
                                <div>{convertToRuble(expense.price)}</div>
                                <More
                                    className={styles.more}
                                    onClick={() => setExpensesItemSettingsOpen(expense.name)}
                                />
                                {expensesItemSettingsOpen === expense.name && (
                                    <div className={styles.settings}>
                                        <div
                                            className={styles.setting}
                                            onClick={() => setExpensesEditItemMenuOpen(expense.name)}
                                        >
                                            <Edit className={styles.icon} /> Изменить
                                        </div>
                                        <div
                                            className={clsx(styles.setting, styles.setting_delete)}
                                            onClick={() => setExpensesDeleteModalOpen(expense.name)}
                                        >
                                            <Delete className={styles.icon} />
                                            Удалить
                                        </div>
                                    </div>
                                )}
                                {isExpensesDeleteModalOpen === expense.name && (
                                    <DeleteModal
                                        text='Вы действительно хотите
                                удалить расход?'
                                        close={() => setExpensesDeleteModalOpen('')}
                                        confirm={() => {
                                            setExpensesDeleteModalOpen('')
                                        }}
                                    />
                                )}
                            </div>
                        )
                    })}

                    <div className={styles.section_add_new_element} onClick={() => setExpensesAddNewItemMenuOpen(true)}>
                        Разовый доход <Plus />
                    </div>
                    {expensesAddNewItemMenuOpen && (
                        <SalaryCreateItem close={() => setExpensesAddNewItemMenuOpen(false)} />
                    )}
                </div>
            </div>
        </div>
    )
}
