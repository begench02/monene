import { ChangeEvent, FC, Reducer, useReducer, useState } from 'react'
import { CreateBudgetGroupGoalItem } from './create-group-goal-item/create-budget-group-goal-item'
import { GroupItem } from 'store/budget/budget.types'
import { Squircle } from 'corner-smoothing'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './create-budget-group-item.module.sass'
import { useCreateBudgetGroupItem } from './create-budget-group-item.reducer'

export const CreateBudgetGroupItem: FC<{ close: VoidFunction }> = ({ close }) => {
    const { state, dispatch } = useCreateBudgetGroupItem()
    console.log(state.isGoal)

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div>Создание расхода</div>
                <div className={styles.header_actions}>
                    <div className={styles.make_goal} onClick={() => dispatch({ type: 'goal' })}>
                        <Star width={12} height={12} />
                        Сделать целью
                    </div>
                    <div className={styles.delete}>Удалить</div>
                    <div className={styles.cancel} onClick={close}>
                        Отменить
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.input_block}>
                    <label className={styles.label} htmlFor='title'>
                        Название
                    </label>
                    <input
                        className={styles.input}
                        id='title'
                        value={state.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            dispatch({ type: 'change-name', payload: e.target.value })
                        }
                    />
                </div>
                {state.isGoal ? (
                    <CreateBudgetGroupGoalItem
                        close={() => {
                            dispatch({ type: 'goal' })
                        }}
                    />
                ) : (
                    <div className={styles.input_block}>
                        <label className={styles.label} htmlFor='monthlyPayment'>
                            Ежемесячный платеж
                        </label>
                        <input
                            className={styles.input}
                            id='monthlyPayment'
                            type='number'
                            value={state.amount}
                            placeholder='0'
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                dispatch({ type: 'change-amount', payload: e.target.value })
                            }
                        />
                        <div className={styles.ruble_block}>
                            <Ruble className={styles.ruble} />
                        </div>
                    </div>
                )}
                <div className={styles.input_block}>
                    <label className={styles.label} htmlFor='spendFrom'>
                        Откуда списывать
                    </label>
                    <input className={styles.input} id='spendFrom' />
                </div>

                <Squircle className={styles.btn} cornerRadius={10}>
                    Сохранить
                </Squircle>
            </div>
        </div>
    )
}
