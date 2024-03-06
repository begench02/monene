import { BudgetExpensesGroup as BudgetExpensesGroupType } from 'store/budget/budget-expenses/budget-expenses.type'
import { BudgetExpensesGroupEdit } from './budget-expenses-group-edit/budget-expenses-group-edit'
import { BudgetExpensesGroupItem } from './budget-expenses-group-item/budget-expenses-group-item'
import { BudgetExpensesGroupItemCreate } from './budget-expenses-group-item/budget-expenses-group-item-create/budget-expenses-group-item-create'
import { budgetExpensesGroupEdit } from 'store/budget/budget-expenses/budget-expenses.reducer'
import { ChangeEvent, FC, useState } from 'react'
import { useAppDispatch } from 'hooks/redux.hook'
import { useOutsideClick } from 'src/hooks/useOutsideClick.hook'
import AddCircle from 'assets/add-circle.svg'
import Check from 'assets/check.svg'
import EmojiPicker from 'emoji-picker-react'
import MoreBlue from 'assets/more-blue.svg'
import styles from './budget-expenes-group.module.sass'
import { convertToRuble } from 'utils/index'
import { BudgetExpensesGroupItemSettings } from './budget-expenses-group-item/budget-expenses-group-item-settings/budget-expenses-group-item-settings'
import { BudgetExpensesGroupItemEdit } from './budget-expenses-group-item/budget-expenses-group-item-edit/budget-expenses-group-item-edit'

export const BudgetExpensesGroup: FC<Props> = (props) => {
	const { group } = props
	const { name, icon, monthPrice, items, id } = group
	const dispatch = useAppDispatch()

	const [isEmojiMenuOpen, setEmojiMenuOpen] = useState(false)
	const [isEditNameMenuOpen, setEditNameMenuOpen] = useState(false)
	const [isGroupSettingsOpen, setGroupSettingsOpen] = useState(false)
	const [newName, setNewName] = useState(name)
	const [newIcon, setNewIcon] = useState(icon)

	const [createNewGroupItem, setCreateNewGroupItem] = useState(false)
	const [isGroupItemEditOpen, setGroupItemEditOpen] = useState('')
	const editSectionNameRef = useOutsideClick(() => setGroupSettingsOpen(false))

	return (
		<div className={styles.main}>
			{isEditNameMenuOpen ? (
				<>
					<div className={styles.header_block}>
						<div className={styles.header_block_title}>Изменить название</div>
						<div className={styles.cancel} onClick={() => setEditNameMenuOpen(false)}>
							Отменить
						</div>
					</div>
					<div className={styles.edit_name_header}>
						<div className={styles.icon} onClick={() => setEmojiMenuOpen(true)}>
							{newIcon}
						</div>
						<div style={{ position: 'relative' }}>
							<input
								className={styles.input}
								value={newName}
								onChange={(e: ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
							/>
							<div
								className={styles.check}
								onClick={() => {
									dispatch(budgetExpensesGroupEdit({ name: newName, icon: newIcon, id }))
									setEditNameMenuOpen(false)
								}}
							>
								<Check width={20} height={20} />
							</div>
						</div>
					</div>
				</>
			) : (
				<div className={styles.header}>
					<div ref={editSectionNameRef}>
						<div className={styles.header_title_text}>
							{icon} {name} <MoreBlue width={24} height={24} onClick={() => setGroupSettingsOpen(true)} />
						</div>
						{isGroupSettingsOpen && (
							<BudgetExpensesGroupEdit
								id={id}
								close={() => setGroupSettingsOpen(false)}
								openEditNameMenu={() => setEditNameMenuOpen(true)}
							/>
						)}
					</div>
					<div className={styles.header_price}>{convertToRuble(monthPrice, 'month')}</div>
				</div>
			)}
			<EmojiPicker
				open={isEmojiMenuOpen}
				onEmojiClick={(data) => {
					setNewIcon(data.emoji)
					setEmojiMenuOpen(false)
				}}
			/>
			<div>
				<div className={styles.content_header}>
					<div>Название</div>
					<div>Откада списывать</div>
					<div>Сумма</div>
				</div>
				{items.map((item) =>
					item.id === isGroupItemEditOpen ? (
						<BudgetExpensesGroupItemEdit groupId={id} item={item} close={() => setGroupItemEditOpen('')} />
					) : (
						<BudgetExpensesGroupItem
							edit={() => setGroupItemEditOpen(item.id)}
							key={item.id}
							groupId={id}
							item={item}
						/>
					),
				)}
			</div>
			<div className={styles.group_item_create} onClick={() => setCreateNewGroupItem(true)}>
				Создать <AddCircle />
			</div>
			{createNewGroupItem && (
				<BudgetExpensesGroupItemCreate groupId={id} close={() => setCreateNewGroupItem(false)} />
			)}
		</div>
	)
}

type Props = {
	group: BudgetExpensesGroupType
}
