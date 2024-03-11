import { BudgetIncomesMainGroupItem as BudgetIncomesMainGroupItemType } from 'store/budget/budget-incomes/budget-incomes.type'
import { BudgetIncomesGroupItemSettings } from '../../budget-incomes-group/budget-incomes-group-item/budget-incomes-group-item-settings/budget-incomes-group-item-settings'
import { convertToRuble } from 'utils/index'
import { FC, useRef, useState } from 'react'
import { Squircle } from 'corner-smoothing'
import { useOutsideClick } from 'hooks/useOutsideClick.hook'
import More from 'assets/more.svg'
import styles from './budget-incomes-main-group-item.module.sass'

export const BudgetIncomesMainGroupItem: FC<Props> = (props) => {
	const { item, groupId, edit, variant } = props
	const { date, price, id } = item
	const [isGroupItemSettingsOpen, setGroupItemSettingsOpen] = useState('')
	const groupItemSettingsRef = useRef(null)
	useOutsideClick(groupItemSettingsRef, () => setGroupItemSettingsOpen(''))

	return (
		<div className={styles.items} ref={groupItemSettingsRef}>
			<div>{variant === 'main' ? 'Зарплата' : 'Аванс'}</div>
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
					name={variant === 'main' ? 'Зарплата' : 'Аванс'}
					close={() => setGroupItemSettingsOpen('')}
				/>
			)}
		</div>
	)
}

type Props = {
	item: BudgetIncomesMainGroupItemType
	groupId: string
	edit: VoidFunction
	variant: 'main' | 'deposit'
}
