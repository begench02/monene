import 'react-circular-progressbar/dist/styles.css'
import { animated, useSpring } from '@react-spring/web'
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { ColoredBlock } from 'components/colored-block/colored-block'
import { useState } from 'react'
import Arrow from 'assets/arrow.svg'
import styles from './budget-financial-health.module.sass'

export const BudgetFinancialHealth = () => {
	const [isOpen, setOpen] = useState(false)
	const [expandStyles, expandApi] = useSpring(() => ({
		from: {
			height: '100px',
			width: '357px',
		},
	}))

	const [shrinkStyles, shrinkApi] = useSpring(() => ({
		from: {
			height: '300px',
			width: '357px',
		},
	}))

	const [hideStyles, hideApi] = useSpring(() => ({
		from: {
			display: 'block',
		},
	}))

	if (isOpen) {
		return (
			<animated.div className={styles.open_main} style={shrinkStyles}>
				<animated.div style={hideStyles}>
					<div className={styles.open_header}>
						<CircularProgressbarWithChildren
							className={styles.progress_bar}
							styles={{
								path: {
									stroke: '#1F6672',
								},
								text: {
									fill: '#1F6672',
								},
							}}
							value={75}
						>
							<div style={{ textAlign: 'center' }}>
								<h2 className={styles.progress_bar_title}>75%</h2>
								<p className={styles.progress_bar_subtitle}>фин. здоровье</p>
							</div>
						</CircularProgressbarWithChildren>
						<div className={styles.analytics}>
							<div>0.4% — День</div>
							<div>5% — Неделя</div>
							<div>2% — Месяц</div>
							<div>23% — Квартал</div>
						</div>
						<div
							className={styles.expand_block}
							onClick={() => {
								hideApi.start({
									from: {
										display: 'block',
									},
									to: {
										display: 'none',
									},
								})
								shrinkApi.start({
									from: {
										height: '300px',
										width: '357px',
									},
									to: {
										height: '100px',
										width: '357px',
									},
									onResolve: () => {
										shrinkApi.set({
											height: '300px',
											width: '357px',
										})
										hideApi.set({
											display: 'block',
										})
									},
									onRest: () => {
										setOpen(false)
									},
								})
							}}
						>
							<Arrow className={styles.arrow} />
						</div>
					</div>
					<div className={styles.open_content}>
						<div className={styles.item}>
							<div>Сальдо</div>
							<ColoredBlock text='Хорошо' variant='good' />
						</div>
						<div className={styles.item}>
							<div>Расходы на еду</div>
							<ColoredBlock text='Среднее' variant='ok' />
						</div>
						<div className={styles.item}>
							<div>Накопления</div>
							<ColoredBlock text='Плохо' variant='bad' />
						</div>
						<div className={styles.item}>
							<div>Дисциплина</div>
							<ColoredBlock text='Плохо' variant='bad' />
						</div>
					</div>
				</animated.div>
			</animated.div>
		)
	}

	return (
		<animated.div className={styles.main} style={expandStyles}>
			<div className={styles.progress_bar_block}>
				<CircularProgressbar
					className={styles.progress_bar}
					styles={{
						path: {
							stroke: '#1F6672',
						},
						text: {
							fill: '#1F6672',
						},
					}}
					value={70}
					text='70%'
				/>
			</div>
			<div>
				<div className={styles.title}>Финансовое здоровье</div>
				<div className={styles.subtitle}>Ваш статус: отлично</div>
			</div>
			<div
				className={styles.expand_block}
				onClick={() => {
					expandApi.start({
						from: {
							height: '100px',
							width: '357px',
						},
						to: {
							height: '300px',
							width: '357px',
						},
						onResolve: () => {
							expandApi.set({
								height: '100px',
								width: '357px',
							})
						},
						onRest: () => {
							setOpen(true)
						},
					})
				}}
			>
				<Arrow className={styles.expand} />
			</div>
			{/* </animated.div> */}
		</animated.div>
	)
}
