import { CSSProperties, FC } from 'react'
import { Squircle } from 'corner-smoothing'
import styles from './button.module.sass'

export const Button: FC<Props> = (props) => {
	const { text, style } = props

	return (
		<Squircle className={styles.main} cornerRadius={10} as='button' onClick={props?.onClick} style={style}>
			{text}
		</Squircle>
	)
}

type Props = {
	text: string
	onClick?: VoidFunction
	style?: CSSProperties
}
