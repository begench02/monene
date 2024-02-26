import styles from './edit-budget-group-item.module.sass'
import Edit from 'assets/edit.svg'
import Copy from 'assets/copy.svg'
import Up from 'assets/up.svg'
import Down from 'assets/bottom.svg'
import Delete from 'assets/delete.svg'
import { FC, useState } from 'react'
import { useAppDispatch } from 'src/hooks'
import { deleteGroupItem, moveGroupItemDown, moveGroupItemUp } from 'store/budget/budget.reducer'

export const EditBudgetGroupItem: FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const { close, name, groupId } = props
    const [isDeleteItemMenuOpen, setDeleteItemMenuOpen] = useState(false)

    return (
        <div className={styles.main}>
            <div className={styles.content_item} onClick={() => {}}>
                <Edit className={styles.icon} />
                <div className={styles.content_item_text}>Изменить</div>
            </div>
            <div className={styles.content_item}>
                <Copy className={styles.icon} />
                <div className={styles.content_item_text}>Дублировать</div>
            </div>
            <div
                className={styles.content_item}
                onClick={() => {
                    dispatch(moveGroupItemUp({ id: groupId, name }))
                    close()
                }}
            >
                <Up className={styles.icon} />
                <div className={styles.content_item_text}>Вверх</div>
            </div>
            <div
                className={styles.content_item}
                onClick={() => {
                    dispatch(moveGroupItemDown({ id: groupId, name }))
                    close()
                }}
            >
                <Down className={styles.icon} />
                <div className={styles.content_item_text}>Вниз</div>
            </div>
            <div
                className={styles.content_item}
                onClick={() => {
                    setDeleteItemMenuOpen(true)
                }}
            >
                <Delete className={styles.icon} />
                <div className={styles.content_item_text}>Удалить</div>
            </div>
            {isDeleteItemMenuOpen && (
                <div className={styles.delete_main}>
                    <div className={styles.delete_title}>Вы действительно хотите удалить расход?</div>
                    <div className={styles.delete_buttons}>
                        <div
                            className={styles.delete_yes}
                            onClick={() => {
                                dispatch(deleteGroupItem({ groupId, name }))
                            }}
                        >
                            <p>Да</p>
                        </div>
                        <div className={styles.delete_no} onClick={close}>
                            <p>Нет</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

type Props = {
    close: VoidFunction
    groupId: string
    name: string
}
