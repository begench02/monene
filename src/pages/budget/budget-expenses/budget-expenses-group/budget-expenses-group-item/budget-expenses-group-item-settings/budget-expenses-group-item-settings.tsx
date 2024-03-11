import {
	budgetExpensesGroupItemDelete,
	budgetExpensesGroupItemDuplicate,
	budgetExpensesGroupItemMoveDown,
	budgetExpensesGroupItemMoveUp,
} from 'store/budget/budget-expenses/budget-expenses.reducer'
import { FC, useState } from 'react'
import { useAppDispatch } from 'hooks/redux.hook'
import Copy from 'assets/copy.svg'
import Delete from 'assets/delete.svg'
import Down from 'assets/bottom.svg'
import Edit from 'assets/edit.svg'
import styles from './budget-expenses-group-item-settings.module.sass'
import Up from 'assets/up.svg'

export const BudgetExpensesGroupItemSettings: FC<Props> = (props) => {
	const { close, name, groupId, itemId, edit } = props
	const dispatch = useAppDispatch()
	const [isDeleteItemMenuOpen, setDeleteItemMenuOpen] = useState(false)

	return (
		<div className={styles.main}>
			<div className={styles.content_item} onClick={edit}>
				<Edit className={styles.icon} />
				<div className={styles.content_item_text}>Изменить</div>
			</div>
			<div
				className={styles.content_item}
				onClick={() => {
					dispatch(budgetExpensesGroupItemDuplicate({ groupId, itemId }))
					close()
				}}
			>
				<Copy className={styles.icon} />
				<div className={styles.content_item_text}>Дублировать</div>
			</div>
			<div
				className={styles.content_item}
				onClick={() => {
					dispatch(budgetExpensesGroupItemMoveUp({ groupId, itemId }))
					close()
				}}
			>
				<Up className={styles.icon} />
				<div className={styles.content_item_text}>Вверх</div>
			</div>
			<div
				className={styles.content_item}
				onClick={() => {
					dispatch(budgetExpensesGroupItemMoveDown({ groupId, itemId }))
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
						<div className={styles.delete_yes}>
							<p
								onClick={() => {
									dispatch(budgetExpensesGroupItemDelete({ groupId, itemId }))
									close()
								}}
							>
								Да
							</p>
						</div>
						<div className={styles.delete_no}>
							<p onClick={close}>Нет</p>
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
	itemId: string
	name: string
	edit: VoidFunction
}
