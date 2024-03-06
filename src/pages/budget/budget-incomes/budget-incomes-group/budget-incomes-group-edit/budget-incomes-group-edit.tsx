import {
	budgetIncomesGroupDelete,
	budgetIncomesGroupMoveDown,
	budgetIncomesGroupMoveUp,
} from 'store/budget/budget-incomes/budget-incomes.reducer'
import { useAppDispatch } from 'hooks/redux.hook'
import { FC, useState } from 'react'
import Bottom from 'assets/bottom.svg'
import Copy from 'assets/copy.svg'
import Delete from 'assets/delete.svg'
import Edit from 'assets/edit.svg'
import styles from './budget-income-group-edit.module.sass'
import Up from 'assets/up.svg'
import { BudgetIncomesGroupItem } from 'store/budget/budget-incomes/budget-incomes.type'

export const BudgetIncomesGroupEdit: FC<Props> = (props) => {
	const dispatch = useAppDispatch()
	const { groupId, item, close } = props
	const [isDeleteGroupShown, setDeleteGroupShown] = useState(false)

	return (
		<div className={styles.main}>
			<div className={styles.content_item}>
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
					dispatch(budgetIncomesGroupMoveUp({ id: item.id }))
					close()
				}}
			>
				<Up className={styles.icon} />
				<div className={styles.content_item_text}>Вверх</div>
			</div>
			<div
				className={styles.content_item}
				onClick={() => {
					dispatch(budgetIncomesGroupMoveDown({ id: item.id }))
					close()
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
						<div
							className={styles.delete_yes}
							onClick={() => dispatch(budgetIncomesGroupDelete({ id: item.id }))}
						>
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
	item: BudgetIncomesGroupItem
	groupId: string
	close: VoidFunction
}
