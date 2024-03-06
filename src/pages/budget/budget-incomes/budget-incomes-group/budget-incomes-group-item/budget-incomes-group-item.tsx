import { BudgetIncomesGroupItem as BudgetIncomesGroupItemType } from 'store/budget/budget-incomes/budget-incomes.type'
import { BudgetIncomesGroupItemSettings } from './budget-incomes-group-item-settings/budget-incomes-group-item-settings'
import { convertToRuble } from 'utils/index'
import { FC, useState } from 'react'
import { Squircle } from 'corner-smoothing'
import { useOutsideClick } from 'hooks/useOutsideClick.hook'
import More from 'assets/more.svg'
import styles from './budget-incomes-group-item.module.sass'

export const BudgetIncomesGroupItem: FC<Props> = (props) => {
	const { item, groupId, edit } = props
	const { name, date, price, id } = item
	const [isGroupItemSettingsOpen, setGroupItemSettingsOpen] = useState('')
	const groupItemSettingsRef = useOutsideClick(() => setGroupItemSettingsOpen(''))
	console.log(isGroupItemSettingsOpen)

	return (
		<div className={styles.items} ref={groupItemSettingsRef}>
			<div>{name}</div>
			<Squircle className={styles.date} cornerRadius={5}>
				{date}
			</Squircle>
			<div className={styles.sum_block}>
				{convertToRuble(price, 'month')}
				<More className={styles.more} onClick={() => setGroupItemSettingsOpen(id)} />
			</div>
			{isGroupItemSettingsOpen === item.id && (
				<BudgetIncomesGroupItemSettings
					edit={edit}
					groupId={groupId}
					itemId={id}
					name={name}
					close={() => setGroupItemSettingsOpen('')}
				/>
			)}
		</div>
	)
}

type Props = {
	item: BudgetIncomesGroupItemType
	groupId: string
	edit: VoidFunction
}
