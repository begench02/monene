import { budgetIncomeGroupDelete, budgetIncomeGroupMoveDown, budgetIncomeGroupMoveUp } from 'store/budget/budget-incomes/budget-incomes.reducer'
import { useAppDispatch } from 'hooks/redux.hook'
import { useState } from 'react'
import Bottom from 'assets/bottom.svg'
import Copy from 'assets/copy.svg'
import Delete from 'assets/delete.svg'
import Edit from 'assets/edit.svg'
import styles from './budget-income-group-edit.module.sass'
import Up from 'assets/up.svg'

export const EditBudgetGroupName = (props: Props) => {
    const dispatch = useAppDispatch()
    const { editName, id, setEditSectionName } = props
    const [isDeleteGroupShown, setDeleteGroupShown] = useState(false)

    return (
        <div className={styles.main}>
            <div className={styles.content_item} onClick={() => editName(true)}>
                <Edit className={styles.icon} />
                <div className={styles.content_item_text}>Изменить название</div>
            </div>
            <div className={styles.content_item}>
                <Copy className={styles.icon} />
                <div className={styles.content_item_text}>Дублировать</div>
            </div>
            <div
                className={styles.content_item}
                onClick={() => {
                    dispatch(budgetIncomeGroupMoveUp({ id }))
                    setEditSectionName(false)
                }}
            >
                <Up className={styles.icon} />
                <div className={styles.content_item_text}>Вверх</div>
            </div>
            <div
                className={styles.content_item}
                onClick={() => {
                    dispatch(budgetIncomeGroupMoveDown({ id }))
                    setEditSectionName(false)
                }}
            >
                <Bottom className={styles.icon} />
                <div className={styles.content_item_text}>Вниз</div>
            </div>
            <div
                className={styles.content_item}
                onClick={() => {
                    setDeleteGroupShown(true)
                }}
            >
                <Delete className={styles.icon} />
                <div className={styles.content_item_text}>Удалить группу</div>
            </div>
            {isDeleteGroupShown && (
                <div className={styles.delete_main}>
                    <div className={styles.delete_title}>Все расходы в группе будут удалены. Вы уверены?</div>
                    <div className={styles.delete_buttons}>
                        <div className={styles.delete_yes} onClick={() => dispatch(budgetIncomeGroupDelete({ id }))}>
                            <p>Да</p>
                        </div>
                        <div className={styles.delete_no} onClick={() => setDeleteGroupShown(false)}>
                            <p>Нет</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

type Props = {
    editName: (bool: boolean) => void
    id: string
    setEditSectionName: (bool: boolean) => void
}
