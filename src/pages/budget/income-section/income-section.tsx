import { Squircle } from 'corner-smoothing'
import AddCircle from 'assets/add-circle.svg'
import More from 'assets/more.svg'
import styles from './income-section.module.sass'

export const IncomeSection = ({ type = 'main' }: Props) => {
    return (
        <Squircle className={styles.main} cornerRadius={5}>
            <div className={styles.header}>
                {type == 'main' && <div>💰 Основные</div>}
                {type == 'additional' && <div>💸 Дополнительные</div>}
                <div className={styles.header_price}>{type == 'main' ? '120 000 ₽/мес' : '3 000 ₽/мес'}</div>
            </div>
            <div className={styles.content_header}>
                <div>Название</div>
                <div>Число</div>
                <div>Сумма</div>
            </div>
            <div className={styles.content}>
                <div>Зарплата</div>
                <Squircle className={styles.content_date} cornerRadius={5}>
                    5 числа
                </Squircle>
                <div style={{ display: 'flex', gap: '5px' }}>
                    30 000 ₽ <More width={25} height={25} />
                </div>
            </div>
            <div className={styles.content}>
                <div>Аванс</div>
                <Squircle className={styles.content_date} cornerRadius={5}>
                    20 числа
                </Squircle>
                <div style={{ display: 'flex', gap: '5px' }}>
                    20 000 ₽ <More width={25} height={25} />
                </div>
            </div>
            <div className={styles.content_create}>
                Создать <AddCircle />
            </div>
        </Squircle>
    )
}

type Props = {
    type: 'main' | 'additional'
}
