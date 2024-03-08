import { convertToRuble } from 'utils/index'
import { DeleteModal } from 'components/delete-modal/delete-modal'
import {
	planSalaryEarningCreate,
	planSalaryEarningDelete,
	planSalaryEarningEdit,
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
import styles from './plan-salary-earnings.module.sass'

export const PlanSalaryEarnings = () => {
	const dispatch = useAppDispatch()
	const { earnings } = useAppSelector((state) => state.planSalary)
	const [earningsItemSettingsOpen, setEarningsItemSettingsOpen] = useState('')
	const [isEarningsDeleteModalOpen, setEarningsDeleteModalOpen] = useState('')
	const [earningsAddNewItemMenuOpen, setEarningsAddNewItemMenuOpen] = useState(false)
	const [earningsEditItemMenuOpen, setEarningsEditItemMenuOpen] = useState('')
	const settingsRef = useRef(null)
	useOutsideClick(settingsRef, () => setEarningsItemSettingsOpen(''))

	return (
		<div className={styles.section}>
			<div className={styles.section_header}>
				<div className={styles.section_header_title}>Доходы</div>
				<Squircle className={styles.section_header_price} cornerRadius={10}>
					{convertToRuble(earnings.totalPrice)}
				</Squircle>
			</div>
			<div className={styles.section_item_block} ref={settingsRef}>
				{earnings.items.map((earning) => {
					return earningsEditItemMenuOpen === earning.name ? (
						<PlanSalaryItemEdit
							key={earning.id}
							deleteFn={() => dispatch(planSalaryEarningDelete({ id: earning.id }))}
							saveFn={(item) => dispatch(planSalaryEarningEdit({ item }))}
							close={() => setEarningsEditItemMenuOpen('')}
							item={earning}
						/>
					) : (
						<div className={styles.section_item}>
							<div>{earning.name}</div>
							<div>{convertToRuble(earning.price)}</div>
							<More className={styles.more} onClick={() => setEarningsItemSettingsOpen(earning.name)} />
							{earningsItemSettingsOpen === earning.name && (
								<div className={styles.settings}>
									<div
										className={styles.setting}
										onClick={() => setEarningsEditItemMenuOpen(earning.name)}
									>
										<Edit className={styles.icon} /> Изменить
									</div>
									<div
										className={clsx(styles.setting, styles.setting_delete)}
										onClick={() => setEarningsDeleteModalOpen(earning.name)}
									>
										<Delete className={styles.icon} />
										Удалить
									</div>
								</div>
							)}
							{isEarningsDeleteModalOpen === earning.name && (
								<DeleteModal
									text='Вы действительно хотите
                            удалить доход?'
									close={() => setEarningsDeleteModalOpen('')}
									confirm={() => {
										dispatch(planSalaryEarningDelete({ id: earning.id }))
										setEarningsDeleteModalOpen('')
									}}
									style={{
										width: '250px',
										height: '130px',
									}}
								/>
							)}
						</div>
					)
				})}
				<div className={styles.section_add_new_element} onClick={() => setEarningsAddNewItemMenuOpen(true)}>
					Разовый доход <Plus />
				</div>
				{earningsAddNewItemMenuOpen && (
					<PlanSalaryItemCreate
						saveFn={(item) => dispatch(planSalaryEarningCreate({ item }))}
						close={() => setEarningsAddNewItemMenuOpen(false)}
					/>
				)}
			</div>
		</div>
	)
}
