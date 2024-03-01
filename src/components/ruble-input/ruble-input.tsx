import { FC, useId } from 'react'
import Ruble from 'assets/ruble.svg'
import styles from './ruble-input.module.sass'

export const RubleInput: FC<Props> = (props) => {
    const { label } = props
    const id = useId()

    return (
        <div className={styles.input_block}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input className={styles.input} id={id} type='number' placeholder='40 000' />
            <div className={styles.ruble_block}>
                <Ruble className={styles.ruble} />
            </div>
        </div>
    )
}

type Props = {
    label: string
}
