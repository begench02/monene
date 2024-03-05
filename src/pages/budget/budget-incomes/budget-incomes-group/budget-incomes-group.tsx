import { BudgetIncomesGroup as BudgetIncomesGroupType } from 'store/budget/budget-incomes/budget-incomes.type'
import { BudgetIncomesGroupItem } from './budget-incomes-group-item/budget-incomes-group-item'
import { BudgetIncomesGroupItemCreate } from './budget-incomes-group-item/budget-incomes-group-item-create/budget-incomes-group-item-create'
import { convertToRuble } from 'utils/index'
import { FC, useState } from 'react'
import { Squircle } from 'corner-smoothing'
import AddCircle from 'assets/add-circle.svg'
import styles from './budget-incomes-group.module.sass'

export const BudgetIncomesGroup: FC<Props> = (props) => {
	const { group } = props
	const [isCreateGroupItemOpen, setCreateGroupItemOpen] = useState(false)

	return (
		<Squircle className={styles.main} cornerRadius={5}>
			<div className={styles.header}>
				{group.icon} {group.name}
				<div className={styles.header_price}>{convertToRuble(group.monthPrice)}</div>
			</div>
			<div className={styles.content_header}>
				<div>Название</div>
				<div>Число</div>
				<div>Сумма</div>
			</div>
			{group.items.map((item) => (
				<BudgetIncomesGroupItem item={item} key={item.id} />
			))}

			{isCreateGroupItemOpen ? (
				<BudgetIncomesGroupItemCreate close={() => setCreateGroupItemOpen(false)} />
			) : (
				<div className={styles.item_create} onClick={() => setCreateGroupItemOpen(true)}>
					Создать <AddCircle />
				</div>
			)}
		</Squircle>
	)
}

type Props = {
	group: BudgetIncomesGroupType
}
