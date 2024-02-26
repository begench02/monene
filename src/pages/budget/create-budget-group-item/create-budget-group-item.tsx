import { ChangeEvent, FC, Reducer, useReducer, useState } from 'react'
import { CreateBudgetGroupGoalItem } from './create-budget-group-goal-item/create-budget-group-goal-item'
import { createGroupItem } from 'store/budget/budget.reducer'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch } from 'src/hooks'
import { useCreateBudgetGroupItem } from './create-budget-group-item.reducer'
import Ruble from 'assets/ruble.svg'
import Star from 'assets/star.svg'
import styles from './create-budget-group-item.module.sass'

export const CreateBudgetGroupItem: FC<Props> = (props) => {
    const { close, groupId } = props
    const { state, dispatch } = useCreateBudgetGroupItem()
    const appDispatch = useAppDispatch()

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
                        state={state}
                        dispatch={dispatch}
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
                            value={state.monthlyPayment}
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

                <Squircle
                    className={styles.btn}
                    onClick={() => appDispatch(() => console.log(state))}
                    // createGroupItem({ groupId: groupId, groupItem: state }))
                    cornerRadius={10}
                >
                    Сохранить
                </Squircle>
            </div>
        </div>
    )
}

type Props = {
    close: VoidFunction
    groupId: string
}
