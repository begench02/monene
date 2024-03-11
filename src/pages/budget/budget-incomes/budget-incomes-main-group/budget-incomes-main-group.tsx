import { BudgetIncomesMainGroup as BudgetIncomesMainGroupType } from 'store/budget/budget-incomes/budget-incomes.type'
import { BudgetIncomesMainGroupItem } from './budget-incomes-main-group-item/budget-incomes-main-group-item'
import { BudgetIncomesMainGroupItemEdit } from './budget-incomes-main-group-item/budget-incomes-main-group-item-edit/budget-incomes-main-group-item-edit'
import { convertToRuble } from 'utils/index'
import { FC, useState } from 'react'
import styles from './budget-incomes-main-group.module.sass'

export const BudgetIncomesMainGroup: FC<Props> = (props) => {
	const { group } = props
	const [isCreateGroupItemOpen, setCreateGroupItemOpen] = useState(false)
	const [isSalaryEditOpen, setSalaryEditOpen] = useState(false)
	const [isDepositEditOpen, setDepositEditOpen] = useState(false)

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				{group.icon} {group.name}
				<div className={styles.header_price}>{convertToRuble(group.monthPrice, 'month')}</div>
			</div>
			<div className={styles.content_header}>
				<div>Название</div>
				<div>Число</div>
				<div>Сумма</div>
			</div>

			{isSalaryEditOpen ? (
				<BudgetIncomesMainGroupItemEdit
					variant='main'
					item={group.salary}
					close={() => setSalaryEditOpen(false)}
				/>
			) : (
				<BudgetIncomesMainGroupItem
					variant='main'
					groupId={group.id}
					item={group.salary}
					edit={() => setSalaryEditOpen(true)}
				/>
			)}
			{isDepositEditOpen ? (
				<BudgetIncomesMainGroupItemEdit
					variant='deposit'
					item={group.deposit}
					close={() => setDepositEditOpen(false)}
				/>
			) : (
				<BudgetIncomesMainGroupItem
					variant='deposit'
					groupId={group.id}
					item={group.deposit}
					edit={() => setDepositEditOpen(true)}
				/>
			)}
		</div>
	)
}

type Props = {
	group: BudgetIncomesMainGroupType
}
