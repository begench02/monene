import 'react-datepicker/dist/react-datepicker.css'
import { ChangeEvent, FC, useReducer, useState } from 'react'
import DatePicker from 'react-datepicker'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './create-budget-group-goal-item.module.sass'
import { useCreateBudgetGroupItem } from '../create-budget-group-item.reducer'

export const CreateBudgetGroupGoalItem: FC<{ close: VoidFunction }> = ({ close }) => {
    const {state, dispatch} = useCreateBudgetGroupItem()
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [isGoal, setGoal] = useState(false)

    return (
        <div className={styles.main}>
            <div className={styles.goal_header}>
                <div className={styles.goal_header_title}>
                    <Star className={styles.star_black} />
                    Создание цели
                </div>
                <div className={styles.goal_header_cancel} onClick={close}>
                    Отменить
                </div>
            </div>

            <div className={styles.input_block}>
                <label className={styles.label} htmlFor='monthly-payment'>
                    Ежемесячный платеж
                </label>
                <input className={styles.input} id='monthly-payment' type='number' />
                <div className={styles.ruble_block}>
                    <Ruble className={styles.ruble} />
                </div>
            </div>

            <div className={styles.input_block}>
                <label className={styles.label} htmlFor='savings-total'>
                    Сколько накопить
                </label>
                <input className={styles.input} id='savings-total' type='number' />
                <div className={styles.ruble_block}>
                    <Ruble className={styles.ruble} />
                </div>
            </div>

            <div className={styles.input_date_block}>
                <div>
                    <label className={styles.label} htmlFor='deadline'>
                        Срок
                    </label>
                    <input className={styles.input} id='deadline' />
                </div>
                <div>
                    <label className={styles.label} htmlFor='start-date'>
                        Дата начала
                    </label>
                    <DatePicker onChange={(date) => console.log(date)} id='start-date' />
                    {/* <input className={styles.input} id='monthly-payment' /> */}
                </div>
            </div>

            <div className={styles.input_block}>
                <label className={styles.label} htmlFor='savings'>
                    Накопленная сумма
                </label>
                <input className={styles.input} id='savings' type='number' />
                <div className={styles.ruble_block}>
                    <Ruble className={styles.ruble} />
                </div>
            </div>
            <div className={styles.input_block}>
                <label className={styles.label} htmlFor='monthlyPayment'>
                    Ежемесячный платеж
                </label>
                <input
                    className={styles.input}
                    id='monthlyPayment'
                    type='number'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMonthlyPayment(+e.target.value)}
                />
                <div className={styles.ruble_block}>
                    <Ruble className={styles.ruble} />
                </div>
            </div>
        </div>
    )
}