import { ChangeEvent, FC, useState } from 'react'
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
    const dispatch = useAppDispatch()
    const { name, icon, totalAmount, items, id } = props.group
    const editSectionNameRef = useOutsideClick(() => setEditSectionName(false))
    const [isEmojiMenuOpen, setEmojiMenuOpen] = useState(false)
    const [isEditSectionNameOpen, setEditSectionName] = useState(false)
    const [editName, setEditName] = useState(false)
    const [newName, setNewName] = useState(name)
    const [newIcon, setNewIcon] = useState(icon)

    const saveEditedName = () => {
        dispatch(editGroupItem({ name: newName, icon: newIcon, id }))
        setEditName(false)
    }

    const saveChangedIcon = (data) => {
        setNewIcon(data.emoji)
        setEmojiMenuOpen(false)
    }

    return (
        <Squircle className={styles.main} cornerRadius={5}>
            {editName ? (
                <>
                    <div className={styles.header_block}>
                        <div className={styles.header_block_title}>Изменить название</div>
                        <div className={styles.cancel} onClick={() => setEditName(false)}>
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
                            <div className={styles.check} onClick={saveEditedName}>
                                <Check width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.header}>
                    <div ref={editSectionNameRef}>
                        <div className={styles.header_title_text}>
                            {icon} {name} <MoreBlue width={24} height={24} onClick={() => setEditSectionName(true)} />
                        </div>
                        {isEditSectionNameOpen && (
                            <EditBudgetGroupName
                                id={id}
                                setEditSectionName={setEditSectionName}
                                editName={setEditName}
                            />
                        )}
                    </div>
                    <div className={styles.header_price}>{totalAmount}</div>
                </div>
            )}
            <EmojiPicker open={isEmojiMenuOpen} onEmojiClick={saveChangedIcon} />
            <div>
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
                            <More width={25} height={25} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.content_create}>
                Создать <AddCircle />
            </div>
        </Squircle>
    )
}
