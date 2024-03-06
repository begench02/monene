import { BudgetExpensesGroupItem as BudgetExpensesGroupItemType } from 'store/budget/budget-expenses/budget-expenses.type'
import { BudgetExpensesGroupItemSettings } from './budget-expenses-group-item-settings/budget-expenses-group-item-settings'
import { FC, useState } from 'react'
import More from 'assets/more.svg'
import styles from './budget-expenses-group-item.module.sass'
import { convertToRuble } from 'utils/index'
import { useOutsideClick } from 'hooks/useOutsideClick.hook'

export const BudgetExpensesGroupItem: FC<Props> = (props) => {
	const { item, groupId, edit } = props
	const { name, cheatFrom, price, id } = item
	const [isGroupItemSettingsOpen, setGroupItemSettingsOpen] = useState('')
	const groupItemSettingsRef = useOutsideClick(() => setGroupItemSettingsOpen(''))

	return (
		<div className={styles.items} ref={groupItemSettingsRef}>
			<div>{name}</div>
			<div>{cheatFrom}</div>
			<div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }}>
				<div>{convertToRuble(price, 'month')}</div>
				<More className={styles.more} onClick={() => setGroupItemSettingsOpen(id)} />
			</div>
			{isGroupItemSettingsOpen === item.id && (
				<BudgetExpensesGroupItemSettings
					edit={edit}
					groupId={groupId}
					itemId={item.id}
					name={name}
					close={() => setGroupItemSettingsOpen('')}
				/>
			)}
		</div>
	)
}

type Props = {
	item: BudgetExpensesGroupItemType
	groupId: string
	edit: VoidFunction
}
