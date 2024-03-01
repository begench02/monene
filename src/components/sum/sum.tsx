import { convertToRuble } from 'utils/index'
import { Squircle } from 'corner-smoothing'
import styles from './sum.module.sass'

export const Sum = ({ sum }: { sum: number }) => {
    return (
        <Squircle className={styles.main} cornerRadius={15}>
            {convertToRuble(sum)}
        </Squircle>
    )
}
