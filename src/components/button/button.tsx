import { FC } from 'react'
import { Squircle } from 'corner-smoothing'
import styles from './button.module.sass'

export const Button: FC<Props> = (props) => {
	const { text } = props

	return (
		<Squircle className={styles.main} cornerRadius={10} as='button'>
			{text}
		</Squircle>
	)
}

type Props = {
	text: string
}
