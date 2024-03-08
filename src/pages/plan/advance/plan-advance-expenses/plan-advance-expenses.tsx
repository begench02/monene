import { convertToRuble } from 'utils/index'
import { DeleteModal } from 'components/delete-modal/delete-modal'
import {
	planAdvanceExpenseCreate,
	planAdvanceExpenseDelete,
	planAdvanceExpenseEdit,
} from 'store/plan/plan-advance/plan-advance.reducer'
import { PlanAdvanceItemCreate } from '../plan-advance-item-create/plan-advance-item-create'
import { PlanAdvanceItemEdit } from '../plan-advance-item-edit/plan-advance-item-edit'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch, useAppSelector } from 'hooks/redux.hook'
import { useOutsideClick } from 'hooks/useOutsideClick.hook'
import { useRef, useState } from 'react'
import clsx from 'clsx'
import Delete from 'assets/delete.svg'
import Edit from 'assets/edit.svg'
import More from 'assets/more.svg'
import Plus from 'assets/add-circle.svg'
import styles from './plan-advance-expenses.module.sass'

export const PlanAdvanceExpenses = () => {
	const dispatch = useAppDispatch()
	const { expenses } = useAppSelector((state) => state.planAdvance)
	const [expensesItemSettingsOpen, setExpensesItemSettingsOpen] = useState('')
	const [isDeleteModalOpen, setDeleteModalOpen] = useState('')
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
					return (
						<div className={styles.content}>
							{expensesEditItemMenuOpen === expense.id ? (
								<PlanAdvanceItemEdit
									deleteFn={() => setDeleteModalOpen(expense.id)}
									close={() => setExpensesEditItemMenuOpen('')}
									saveFn={(item) => dispatch(planAdvanceExpenseEdit({ item }))}
									item={expense}
								/>
							) : (
								<div className={styles.section_item}>
									<div>{expense.name}</div>
									<div>{convertToRuble(expense.price)}</div>
									<More
										className={styles.more}
										onClick={() => setExpensesItemSettingsOpen(expense.name)}
									/>
									{expensesItemSettingsOpen === expense.name && (
										<div className={styles.settings}>
											<div
												className={styles.setting}
												onClick={() => setExpensesEditItemMenuOpen(expense.id)}
											>
												<Edit className={styles.icon} /> Изменить
											</div>
											<div
												className={clsx(styles.setting, styles.setting_delete)}
												onClick={() => setDeleteModalOpen(expense.id)}
											>
												<Delete className={styles.icon} />
												Удалить
											</div>
										</div>
									)}
								</div>
							)}

							{isDeleteModalOpen === expense.id && (
								<DeleteModal
									text='Вы действительно хотите
						удалить доход?'
									close={() => setDeleteModalOpen('')}
									confirm={() => {
										dispatch(planAdvanceExpenseDelete({ id: expense.id }))
										setDeleteModalOpen('')
									}}
									style={{
										width: '250px',
										height: '130px',
										top: '15%',
										right: '20%',
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
					<PlanAdvanceItemCreate
						saveFn={(item) => dispatch(planAdvanceExpenseCreate({ item }))}
						close={() => setExpensesAddNewItemMenuOpen(false)}
					/>
				)}
			</div>
		</div>
	)
}
