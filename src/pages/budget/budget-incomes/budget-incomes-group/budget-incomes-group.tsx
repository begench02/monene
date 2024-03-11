import { BudgetIncomesGroup as BudgetIncomesGroupType } from 'store/budget/budget-incomes/budget-incomes.type'
import { BudgetIncomesGroupItem } from './budget-incomes-group-item/budget-incomes-group-item'
import { BudgetIncomesGroupItemCreate } from './budget-incomes-group-item/budget-incomes-group-item-create/budget-incomes-group-item-create'
import { BudgetIncomesGroupItemEdit } from './budget-incomes-group-item/budget-incomes-group-item-edit/budget-incomes-group-item-edit'
import { convertToRuble } from 'utils/index'
import { FC, useState } from 'react'
import AddCircle from 'assets/add-circle.svg'
import styles from './budget-incomes-group.module.sass'

export const BudgetIncomesGroup: FC<Props> = (props) => {
	const { group } = props
	const [isCreateGroupItemOpen, setCreateGroupItemOpen] = useState(false)
	const [isGroupItemEditOpen, setGroupItemEditOpen] = useState('')

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				{group.icon} {group.name}
				<div className={styles.header_price}>{convertToRuble(group.monthPrice, 'month')}</div>
			</div>
			<div className={styles.content_header}>
				<div>Название</div>
				<div>Период</div>
				<div>Число</div>
				<div className={styles.sum}>Сумма</div>
				<div></div>
			</div>
			{group.items.map((item) =>
				item.id === isGroupItemEditOpen ? (
					<BudgetIncomesGroupItemEdit item={item} close={() => setGroupItemEditOpen('')} key={item.id} />
				) : (
					<BudgetIncomesGroupItem
						groupId={group.id}
						item={item}
						key={item.id}
						edit={() => setGroupItemEditOpen(item.id)}
					/>
				),
			)}

			{isCreateGroupItemOpen ? (
				<BudgetIncomesGroupItemCreate close={() => setCreateGroupItemOpen(false)} />
			) : (
				<div className={styles.item_create} onClick={() => setCreateGroupItemOpen(true)}>
					Создать <AddCircle />
				</div>
			)}
		</div>
	)
}

type Props = {
	group: BudgetIncomesGroupType
}
