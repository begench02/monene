import { BudgetIncomesGroupItem as BudgetIncomesGroupItemType } from 'store/budget/budget-incomes/budget-incomes.type'
import { convertToRuble } from 'utils/index'
import { FC } from 'react'
import { Squircle } from 'corner-smoothing'
import More from 'assets/more.svg'
import styles from './budget-incomes-group-item.module.sass'

export const BudgetIncomesGroupItem: FC<Props> = (props) => {
	const { item } = props
	const { name, date, price } = item

	return (
		<div className={styles.items}>
			<div>{name}</div>
			<Squircle className={styles.date} cornerRadius={5}>
				{date}
			</Squircle>
			<div className={styles.sum_block}>
				{convertToRuble(price, 'month')}
				<More width={25} height={25} />
			</div>
		</div>
	)
}

type Props = {
	item: BudgetIncomesGroupItemType
}
