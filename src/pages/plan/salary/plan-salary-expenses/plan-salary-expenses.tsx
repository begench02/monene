import { convertToRuble } from 'utils/index'
import { DeleteModal } from 'components/delete-modal/delete-modal'
import {
	planSalaryExpenseCreate,
	planSalaryExpenseDelete,
	planSalaryExpenseEdit,
} from 'store/plan/plan-salary/plan-salary.reducer'
import { PlanSalaryItemCreate } from '../plan-salary-item-create/plan-salary-item-create'
import { PlanSalaryItemEdit } from '../plan-salary-item-edit/plan-salary-item-edit'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import { useOutsideClick } from 'hooks/useOutsideClick.hook'
import { useRef, useState } from 'react'
import clsx from 'clsx'
import Delete from 'assets/delete.svg'
import Edit from 'assets/edit.svg'
import More from 'assets/more.svg'
import Plus from 'assets/add-circle.svg'
import styles from './plan-salary-expenses.module.sass'

export const PlanSalaryExpenses = () => {
	const dispatch = useAppDispatch()
	const { expenses } = useAppSelector((state) => state.planSalary)
	const [expensesItemSettingsOpen, setExpensesItemSettingsOpen] = useState('')
	const [isExpensesDeleteModalOpen, setExpensesDeleteModalOpen] = useState('')
	const [expensesEditItemMenuOpen, setExpensesEditItemMenuOpen] = useState('')
	const [expensesAddNewItemMenuOpen, setExpensesAddNewItemMenuOpen] = useState(false)
	const expensesSettingsRef = useRef(null)
	useOutsideClick(expensesSettingsRef, () => setExpensesItemSettingsOpen(''))

	return (
		<div className={styles.section}>
			<div className={styles.section_header}>
				<div className={styles.section_header_title}>Расходы</div>
				<Squircle className={styles.section_header_price} cornerRadius={10}>
					{convertToRuble(expenses.totalPrice)}
				</Squircle>
			</div>
			<div className={styles.section_item_block} ref={expensesSettingsRef}>
				{expenses.items.map((expense) => {
					return expensesEditItemMenuOpen === expense.name ? (
						<PlanSalaryItemEdit
							deleteFn={() => dispatch(planSalaryExpenseDelete({ id: expense.id }))}
							close={() => setExpensesEditItemMenuOpen('')}
							saveFn={(item) => dispatch(planSalaryExpenseEdit({ item }))}
							key={expense.id}
							item={expense}
						/>
					) : (
						<div className={styles.section_item}>
							<div>{expense.name}</div>
							<div>{convertToRuble(expense.price)}</div>
							<More className={styles.more} onClick={() => setExpensesItemSettingsOpen(expense.name)} />
							{expensesItemSettingsOpen === expense.name && (
								<div className={styles.settings}>
									<div
										className={styles.setting}
										onClick={() => setExpensesEditItemMenuOpen(expense.name)}
									>
										<Edit className={styles.icon} /> Изменить
									</div>
									<div
										className={clsx(styles.setting, styles.setting_delete)}
										onClick={() => setExpensesDeleteModalOpen(expense.name)}
									>
										<Delete className={styles.icon} />
										Удалить
									</div>
								</div>
							)}
							{isExpensesDeleteModalOpen === expense.name && (
								<DeleteModal
									text='Вы действительно хотите
                                удалить расход?'
									close={() => setExpensesDeleteModalOpen('')}
									confirm={() => {
										dispatch(planSalaryExpenseDelete({ id: expense.id }))
										setExpensesDeleteModalOpen('')
									}}
								/>
							)}
						</div>
					)
				})}

				<div className={styles.section_add_new_element} onClick={() => setExpensesAddNewItemMenuOpen(true)}>
					Разовый доход <Plus />
				</div>
				{expensesAddNewItemMenuOpen && (
					<PlanSalaryItemCreate
						saveFn={(item) => dispatch(planSalaryExpenseCreate({ item }))}
						close={() => setExpensesAddNewItemMenuOpen(false)}
					/>
				)}
			</div>
		</div>
	)
}
