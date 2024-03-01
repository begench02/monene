import { FC } from 'react'
import { RubleInput } from 'components/ruble-input/ruble-input'
import Close from 'assets/close.svg'
import styles from './fact-balance-top-up.module.sass'

export const FactBalanceTopUp: FC<Props> = (props) => {
    const { close } = props

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.title}>Пополнение баланса</div>
                <Close className={styles.close} onClick={close} />
            </div>
            <div>
                <RubleInput label='Сумма' />
            </div>
        </div>
    )
}

type Props = {
    close: VoidFunction
}

{
    /* <div className={styles.input_block}>
                    <label className={styles.label} htmlFor='title'>
                        Название
                    </label>
                    <input
                        className={styles.input}
                        id='title'
                        value={state.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            dispatch({ type: 'change-name', payload: e.target.value })
                        }
                    />
                </div> */
}
