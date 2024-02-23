import { EditSectionName } from './edit-section-name/edit-section-name'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { Group } from 'store/budget/budget.types'
import { Squircle } from 'corner-smoothing'
import { useOutsideClick } from 'src/hooks/useOutsideClick.hook'
import EmojiPicker from 'emoji-picker-react'
import More from 'assets/more.svg'
import MoreBlue from 'assets/more-blue.svg'
import styles from './expenses-section.module.sass'

export const BudgetSection: FC<{ group: Group }> = ({ group }) => {
    const { name, icon, totalAmount, items } = group

    const [isEmojiMenuOpen, setEmojiMenuOpen] = useState(false)
    const [isEditSectionNameOpen, setEditSectionName] = useState(false)

    const handleEmojiClick = (data) => {
        setEmojiMenuOpen(false)
    }

    const editSectionNameRef = useRef()
    useEffect(() => {
        let handle = (e) => {
            // @ts-ignore
            if (!editSectionNameRef.current.contains(e.target)) {
                setEditSectionName(false)
            }
        }

        document.addEventListener('mousedown', handle)
    })

    return (
        <Squircle className={styles.main} cornerRadius={5}>
            <div className={styles.header}>
                <EmojiPicker open={isEmojiMenuOpen} onEmojiClick={handleEmojiClick} />
                <div ref={editSectionNameRef}>
                    <div className={styles.header_title_text}>
                        {icon} {name} <MoreBlue width={24} height={24} onClick={() => setEditSectionName(true)} />
                    </div>
                    {isEditSectionNameOpen && <EditSectionName />}
                </div>
                <div className={styles.header_price}>{totalAmount}</div>
            </div>
            <div>
                <div className={styles.content_header}>
                    <div>Название</div>
                    <div>Откада списывать</div>
                    <div>Сумма</div>
                </div>
                {items.map(({ name, cheatFrom, amount }) => (
                    <div className={styles.content_items}>
                        <div>{name}</div>
                        <div>{cheatFrom}</div>
                        <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-between' }}>
                            <div>{amount}</div>
                            <More width={25} height={25} />
                        </div>
                    </div>
                ))}
            </div>
        </Squircle>
    )
}
