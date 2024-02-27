import { Squircle } from 'corner-smoothing'
import Ruble from 'assets/ruble.svg'
import styles from './salary-create-item.module.sass'

export const SalaryCreateItem = ({ close }: { close: VoidFunction }) => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.title}>Создание разового дохода</div>
                <div className={styles.cancel} onClick={close}>
                    Отменить
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.input_block}>
                    <label className={styles.label} htmlFor='name'>
                        Название
                    </label>
                    <input id='name' placeholder='Фриланс' />
                </div>
                <div className={styles.date_block}>
                    <div className={styles.input_block}>
                        <label className={styles.label} htmlFor='sum'>
                            Сумма
                        </label>
                        <input id='sum' type='number' placeholder='30 000' />
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
