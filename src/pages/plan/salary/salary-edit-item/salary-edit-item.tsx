import { EARNING } from '../salary'
import { ChangeEvent, FC, useState } from 'react'
import { Squircle } from 'corner-smoothing'
import Ruble from 'assets/ruble.svg'
import styles from './salary-edit-item.module.sass'

export const SalaryEditItem: FC<Props> = (props) => {
    const { item, close } = props

    const [name, setName] = useState(item.name)
    const [price, setPrice] = useState(item.price)

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.title}>Изменение разового дохода</div>
                <div className={styles.cancel} onClick={close}>
                    Отменить
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.input_block}>
                    <label className={styles.label} htmlFor='name'>
                        Название
                    </label>
                    <input
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        id='name'
                        placeholder='Фриланс'
                    />
                </div>
                <div className={styles.date_block}>
                    <div className={styles.input_block}>
                        <label className={styles.label} htmlFor='sum'>
                            Сумма
                        </label>
                        <input
                            value={price}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(+e.target.value)}
                            id='sum'
                            type='number'
                            placeholder='30 000'
                        />
                        <div className={styles.ruble_block}>
                            <Ruble className={styles.ruble} />
                        </div>
                    </div>
                    <div className={styles.input_block}>
                        <label className={styles.label} htmlFor='enrollment-date'>
                            Дата зачисления
                        </label>
                        <input type='date' />
                    </div>
                </div>
            </div>
            <Squircle className={styles.btn} cornerRadius={10} as='button'>
                Сохранить
            </Squircle>
        </div>
    )
}

type Props = {
    close: VoidFunction
    item: EARNING
}
