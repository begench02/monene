import { Squircle } from 'corner-smoothing'
import { useCallback, useEffect, useRef, useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import More from 'assets/more.svg'
import styles from './expenses-section.module.sass'
import { EditSectionName } from './edit-section-name/edit-section-name'
import MoreBlue from 'assets/more-blue.svg'
import { useOutsideClick } from 'src/hooks/useOutsideClick.hook'

const items = [
    {
        name: 'Арендую квартиру',
        debit: 'Зарплата',
        sum: '30 000 ₽',
    },
    {
        name: 'Продукты',
        debit: '50 на 50',
        sum: '20 000 ₽',
    },
    {
        name: 'Интернет',
        debit: 'Аванс',
        sum: '20 000 ₽',
    },
]

let emoji = null
export const BudgetSection = () => {
    const [isEmojiMenuOpen, setEmojiMenuOpen] = useState(false)
    const [isEditSectionNameOpen, setEditSectionName] = useState(false)

    const handleEmojiClick = (data) => {
        emoji = data.emoji
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
                        {emoji} Жильё <MoreBlue width={24} height={24} onClick={() => setEditSectionName(true)} />
                    </div>
                    {isEditSectionNameOpen && <EditSectionName />}
                </div>
                <div className={styles.header_price}>120 000 ₽/мес</div>
            </div>
            <div>
                <div className={styles.content_header}>
                    <div>Название</div>
                    <div>Откада списывать</div>
                    <div>Сумма</div>
                </div>
                {items.map(({ name, debit, sum }) => (
                    <div className={styles.content_items}>
                        <div>{name}</div>
                        <div>{debit}</div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            {sum} <More width={25} height={25} />
                        </div>
                    </div>
                ))}
            </div>
        </Squircle>
    )
}
