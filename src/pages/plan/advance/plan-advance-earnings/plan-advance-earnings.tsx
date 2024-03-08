import { convertToRuble } from 'utils/index'
import { DeleteModal } from 'components/delete-modal/delete-modal'
import {
	planAdvanceEarningCreate,
	planAdvanceEarningDelete,
	planAdvanceEarningEdit,
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
import styles from './plan-advance-earnings.module.sass'

export const PlanAdvanceEarnings = () => {
	const dispatch = useAppDispatch()
	const { earnings } = useAppSelector((state) => state.planAdvance)
	const [earningsItemSettingsOpen, setEarningsItemSettingsOpen] = useState('')
	const [isEarningsDeleteModalOpen, setEarningsDeleteModalOpen] = useState('')
	const [earningsAddNewItemMenuOpen, setEarningsAddNewItemMenuOpen] = useState(false)
	const [earningsEditItemMenuOpen, setEarningsEditItemMenuOpen] = useState('')
	const earningsSettingRef = useRef(null)
	useOutsideClick(earningsSettingRef, () => setEarningsItemSettingsOpen(''))

	return (
		<div className={styles.section}>
			<div className={styles.section_header}>
				<div className={styles.section_header_title}>Доходы</div>
				<Squircle className={styles.section_header_price} cornerRadius={10}>
					{convertToRuble(earnings.totalPrice)}
				</Squircle>
			</div>
			<div className={styles.section_item_block} ref={earningsSettingRef}>
				{earnings.items.map((earning) => {
					return (
						<div className={styles.content}>
							{earningsEditItemMenuOpen === earning.name ? (
								<PlanAdvanceItemEdit
									key={earning.id}
									deleteFn={() => setEarningsDeleteModalOpen(earning.name)}
									close={() => setEarningsEditItemMenuOpen('')}
									saveFn={(item) => dispatch(planAdvanceEarningEdit({ item }))}
									item={earning}
								/>
							) : (
								<div className={styles.section_item}>
									<div>{earning.name}</div>
									<div>{convertToRuble(earning.price)}</div>
									<More
										className={styles.more}
										onClick={() => setEarningsItemSettingsOpen(earning.name)}
									/>
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
								</div>
							)}
							{isEarningsDeleteModalOpen === earning.name && (
								<DeleteModal
									text='Вы действительно хотите
						удалить доход?'
									close={() => setEarningsDeleteModalOpen('')}
									confirm={() => {
										dispatch(planAdvanceEarningDelete({ id: earning.id }))
										setEarningsDeleteModalOpen('')
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
				<div className={styles.section_add_new_element} onClick={() => setEarningsAddNewItemMenuOpen(true)}>
					Разовый доход <Plus />
				</div>
				{earningsAddNewItemMenuOpen && (
					<PlanAdvanceItemCreate
						saveFn={(item) => dispatch(planAdvanceEarningCreate({ item }))}
						close={() => setEarningsAddNewItemMenuOpen(false)}
					/>
				)}
			</div>
		</div>
	)
}
