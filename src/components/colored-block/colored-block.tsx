import { FC } from 'react'
import { Squircle } from 'corner-smoothing'
import styles from './colored-block.module.sass'

const variant_color: Record<Variant, [string, string]> = {
	bad: ['#F8E2E2', '#A60F0F'],
	ok: ['#F8F2E2', '#684A1E'],
	good: ['#E2F4F8', '#1E5D68'],
}

export const ColoredBlock: FC<Props> = (props) => {
	const { variant, text } = props
	const [backgroundColor, color] = variant_color[variant]

	return (
		<Squircle cornerRadius={10} className={styles.main} style={{ backgroundColor, color }}>
			{text}
		</Squircle>
	)
}

type Props = {
	variant: Variant
	text: string
}

type Variant = 'bad' | 'ok' | 'good'
