import { convertToRuble } from 'utils/index'
import { useState } from 'react'
import Close from 'assets/close.svg'
import clsx from 'clsx'
import styles from './fact-goals.module.sass'

const items = [
    {
        name: 'На свадьбу',
        goal: 130_000,
        plan: 60_000,
        saved: 30_000,
    },
    {
        name: 'Ипотека',
        goal: 16_000_000,
        plan: 400_000,
        saved: 5_000,
    },
]

const archive_items = [
    {
        name: 'На свадьбу',
        goal: 60_000,
        saving: 30_000,
    },
    {
        name: 'Ипотека',
        goal: 400_000,
        saving: 5_000,
    },
    {
        name: 'Ипотека',
        goal: 400_000,
        saving: 5_000,
    },
]

export const FactGoals = () => {
    const [isArchiveOpen, setArchiveOpen] = useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState('')
    const [hintStyle, setHintStyle] = useState({ display: 'none' })
    console.log(hintStyle)

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Цели
                    <div
                        className={styles.question}
                        onMouseEnter={(e) => {
                            setHintStyle({ display: 'block' })
                        }}
                        onMouseLeave={(e) => {
                            setHintStyle({ display: 'none' })
                        }}
                    >
                        ?
                    </div>
                    <div className={styles.hint} style={hintStyle}>
                        Изменять сумму накоплений можно через баланс
                    </div>
                </div>
                <div className={styles.sum}>{convertToRuble(35_000)}</div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div>Название</div>
                    <div className={styles.goal}>Цель</div>
                    <div className={styles.plan}>План</div>
                    <div className={styles.saved}>Накоплено</div>
                </div>
                {items.map((item) => {
                    const isDeleteOpen = item.name === isDeleteModalOpen
                    return (
                        <div className={styles.item}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.goal}>{convertToRuble(item.goal)}</div>
                            <div className={styles.plan}>{convertToRuble(item.plan)}</div>
                            <div className={styles.saved}>{convertToRuble(item.saved)}</div>
                            <div
                                className={clsx(styles.close, isDeleteOpen && styles.close_active)}
                                onClick={() => setDeleteModalOpen(item.name)}
                            >
                                <Close />
                            </div>
                            {item.name === isDeleteModalOpen && (
                                <div className={styles.delete_modal}>
                                    Накопленная сумма переведется на баланс.
                                    <br /> Вы действительно хотите закрыть цель?
                                    <div className={styles.buttons}>
                                        <div className={styles.yes}>
                                            <p>Да</p>
                                        </div>
                                        <div className={styles.no}>
                                            <p onClick={() => setDeleteModalOpen('')}>Нет</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            {!isArchiveOpen && (
                <div className={styles.archive} onClick={() => setArchiveOpen(true)}>
                    Архив целей
                </div>
            )}
            {isArchiveOpen && (
                <div className={styles.archive_main}>
                    <div className={styles.archive_header}>
                        <div className={styles.title}>Архив целей</div>
                        <div className={styles.cancel} onClick={() => setArchiveOpen(false)}>
                            Закрыть
                        </div>
                    </div>
                    <div className={styles.archive_content}>
                        <div className={styles.header}>
                            <div>Название</div>
                            <div className={styles.goal}>Цель</div>
                            <div className={styles.saving}>Было накоплено</div>
                        </div>
                        <div className={styles.items}>
                            {archive_items.map((item) => (
                                <div className={styles.item}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.goal}>{convertToRuble(item.goal)}</div>
                                    <div className={styles.saving}>{convertToRuble(item.saving)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
