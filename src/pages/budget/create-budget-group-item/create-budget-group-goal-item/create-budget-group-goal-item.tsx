import 'react-datepicker/dist/react-datepicker.css'
import { ChangeEvent, Dispatch, FC, useState } from 'react'
import { GroupItem } from 'store/budget/budget.types'
import { BudgetGroupItemAction, useCreateBudgetGroupItem } from '../create-budget-group-item.reducer'
import DatePicker from 'react-datepicker'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './create-budget-group-goal-item.module.sass'

export const CreateBudgetGroupGoalItem: FC<Props> = (props) => {
    const { close, state, dispatch } = props
    // const [savings]

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
                <input
                    className={styles.input}
                    value={state.monthlyPayment}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'set-monthly-payment', payload: e.target.value })
                    }
                    id='monthly-payment'
                    type='number'
                />
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
                    // onChange={(e: ChangeEvent<HTMLInputElement>) => setMonthlyPayment(+e.target.value)}
                />
                <div className={styles.ruble_block}>
                    <Ruble className={styles.ruble} />
                </div>
            </div>
        </div>
    )
}

type Props = {
    close: VoidFunction
    dispatch: Dispatch<BudgetGroupItemAction>
    state: GroupItem
}
