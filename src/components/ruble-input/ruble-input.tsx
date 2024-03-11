import { FC, useId } from 'react'
import Ruble from 'assets/ruble.svg'
import styles from './ruble-input.module.sass'
import { useFormContext } from 'react-hook-form'

export const RubleInput: FC<Props> = (props) => {
	const { label } = props
	const { register } = useFormContext()
	const id = useId()

	return (
		<div className={styles.input_block}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<input className={styles.input} id={id} type='number' placeholder='40 000' {...register('price')} />
			<div className={styles.ruble_block}>
				<Ruble className={styles.ruble} />
			</div>
		</div>
	)
}

type Props = {
	label: string
}
