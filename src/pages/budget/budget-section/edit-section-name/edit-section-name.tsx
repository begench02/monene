import Bottom from 'assets/bottom.svg'
import Copy from 'assets/copy.svg'
import Delete from 'assets/delete.svg'
import Edit from 'assets/edit.svg'
import styles from './edit-section-name.module.sass'
import Up from 'assets/up.svg'

export const EditSectionName = () => {
    return (
        // @ts-ignore
        <div className={styles.main}>
            <div className={styles.content_item}>
                <Edit className={styles.icon} />
                <div className={styles.content_item_text}>Изменить название</div>
            </div>
            <div className={styles.content_item}>
                <Copy className={styles.icon} />
                <div className={styles.content_item_text}>Дублировать</div>
            </div>
            <div className={styles.content_item}>
                <Up className={styles.icon} />
                <div className={styles.content_item_text}>Вверх</div>
            </div>
            <div className={styles.content_item}>
                <Bottom className={styles.icon} />
                <div className={styles.content_item_text}>Вниз</div>
            </div>
            <div className={styles.content_item}>
                <Delete className={styles.icon} />
                <div className={styles.content_item_text}>Удалить группу</div>
            </div>
        </div>
    )
}
