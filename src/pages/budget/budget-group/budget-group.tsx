import { ChangeEvent, FC, useState } from 'react'
import { CreateBudgetGroupItem } from '../create-budget-group-item/create-budget-group-item'
import { EditBudgetGroupItem } from './edit-budget-group-item/edit-budget-group-item'
import { EditBudgetGroupName } from './edit-budget-group-name/edit-budget-group-name'
import { editGroupItem } from 'store/budget/budget.reducer'
import { Group } from 'store/budget/budget.types'
import { Squircle } from 'corner-smoothing'
import { useAppDispatch } from 'src/hooks'
import { useOutsideClick } from 'src/hooks/useOutsideClick.hook'
import AddCircle from 'assets/add-circle.svg'
import Check from 'assets/check.svg'
import EmojiPicker from 'emoji-picker-react'
import More from 'assets/more.svg'
import MoreBlue from 'assets/more-blue.svg'
import styles from './budget-group.module.sass'

export const BudgetGroup: FC<{ group: Group }> = (props) => {
    const { name, icon, totalAmount, items, id } = props.group
    const dispatch = useAppDispatch()

    const [isEmojiMenuOpen, setEmojiMenuOpen] = useState(false)
    // Edit group name
    const [isEditNameMenuOpen, setEditNameMenuOpen] = useState(false)
    // Group name settings
    const [isGroupSettingsOpen, setGroupSettingsOpen] = useState(false)
    // Edited name and icon
    const [newName, setNewName] = useState(name)
    const [newIcon, setNewIcon] = useState(icon)

    const [isGroupItemSettingsOpen, setGroupItemSettingsOpen] = useState('')
    const [createNewGroupItem, setCreateNewGroupItem] = useState(false)

    const editSectionNameRef = useOutsideClick(() => setGroupSettingsOpen(false))
    const editGroupItemNameRef = useOutsideClick(() => setGroupItemSettingsOpen(''))

    return (
        <Squircle className={styles.main} cornerRadius={5}>
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
                                    dispatch(editGroupItem({ name: newName, icon: newIcon, id }))
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
                            <EditBudgetGroupName
                                id={id}
                                close={() => setGroupSettingsOpen(false)}
                                openEditNameMenu={() => setEditNameMenuOpen(true)}
                            />
                        )}
                    </div>
                    <div className={styles.header_price}>{totalAmount}</div>
                </div>
            )}
            <EmojiPicker
                open={isEmojiMenuOpen}
                onEmojiClick={(data) => {
                    setNewIcon(data.emoji)
                    setEmojiMenuOpen(false)
                }}
            />
            <div ref={editGroupItemNameRef}>
                <div className={styles.content_header}>
                    <div>Название</div>
                    <div>Откада списывать</div>
                    <div>Сумма</div>
                </div>
                {items.map(({ name, cheatFrom, amount }) => (
                    <div key={`${name}-${amount}`} className={styles.content_items}>
                        <div>{name}</div>
                        <div>{cheatFrom}</div>
                        <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }}>
                            <div>{amount}</div>
                            <More
                                className={styles.more}
                                width={25}
                                height={25}
                                onClick={() => setGroupItemSettingsOpen(name)}
                            />
                        </div>
                        {isGroupItemSettingsOpen === name && (
                            <EditBudgetGroupItem groupId={id} name={name} close={() => setGroupItemSettingsOpen('')} />
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.group_item_create} onClick={() => setCreateNewGroupItem(true)}>
                Создать <AddCircle />
            </div>
            {createNewGroupItem && <CreateBudgetGroupItem close={() => setCreateNewGroupItem(false)} />}
        </Squircle>
    )
}
