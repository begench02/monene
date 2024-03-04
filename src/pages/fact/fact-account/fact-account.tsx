import { ChangeEvent, useState } from 'react'
import { convertToRuble } from 'utils/index'
import { Squircle } from 'corner-smoothing'
import Add from 'assets/add-circle.svg'
import More from 'assets/more.svg'
import Ruble from 'assets/ruble.svg'
import styles from './fact-account.module.sass'
import { FactAccountSetting } from './fact-account-setting/fact-account-setting'
import { useOutsideClick } from 'src/hooks/useOutsideClick.hook'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { addAccountItem, deleteAccountItem, moveAccountItemDown, moveAccountItemUp } from 'store/fact/fact.reducer'

export const FactAccount = () => {
	const items = useAppSelector((state) => state.fact.accountItems)
	const dispatch = useAppDispatch()

	const [name, setName] = useState('')
	const [sum, setSum] = useState<number>()
	const [isCreateAccountOpen, setCreateAccountOpen] = useState(false)
	const [hintStyle, setHintStyle] = useState({ display: 'none' })
	const [settings, setSettings] = useState('')
	const settingsRef = useOutsideClick(() => setSettings(''))

	const createAccount = () => {
		dispatch(addAccountItem({ name, sum }))
		setName('')
		setSum(undefined)
		setCreateAccountOpen(false)
	}

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>
					Счета
					<div
						className={styles.question}
						onMouseEnter={(e) => {
							setHintStyle({ display: 'block' })
						}}
						onMouseLeave={(e) => {
							setHintStyle({ display: 'none' })
						}}
					>
						?
					</div>
					<div className={styles.hint} style={hintStyle}>
						Изменять сумму накоплений можно через баланс
					</div>
				</div>

				<div className={styles.sum}>{convertToRuble(20_000)}</div>
			</div>
			<div ref={settingsRef}>
				{items.map(({ id, ...item }) => (
					<div className={styles.item}>
						<div className={styles.name}>{item.name}</div>
						<div className={styles.sum_block}>
							<Squircle className={styles.sum} cornerRadius={8}>
								{convertToRuble(item.sum)}
							</Squircle>
							<More className={styles.more} onClick={() => setSettings(item.name)} />
						</div>
						{item.name === settings && (
							<FactAccountSetting
								deleteFn={() => dispatch(deleteAccountItem({ id }))}
								moveUpFn={() => dispatch(moveAccountItemUp({ id }))}
								moveDownFn={() => dispatch(moveAccountItemDown({ id }))}
							/>
						)}
					</div>
				))}
			</div>
			{!isCreateAccountOpen && (
				<div className={styles.create_account} onClick={() => setCreateAccountOpen(true)}>
					Создать счет <Add />
				</div>
			)}

			{isCreateAccountOpen && (
				<div className={styles.create_account_main}>
					<div className={styles.header}>
						<div className={styles.title}>Создание счета</div>
						<div className={styles.cancel} onClick={() => setCreateAccountOpen(false)}>
							Отменить
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.input_block}>
							<label className={styles.label} htmlFor='name'>
								Название
							</label>
							<input
								className={styles.input}
								value={name}
								onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
								id='name'
								placeholder='Помощь родителям'
							/>
						</div>
						<div className={styles.input_block}>
							<label className={styles.label} htmlFor='sum'>
								Стартовая сумма
							</label>
							<input
								className={styles.input}
								value={sum}
								onChange={(e: ChangeEvent<HTMLInputElement>) => setSum(+e.target.value)}
								id='sum'
								type='number'
								placeholder='40 000'
							/>
							<div className={styles.ruble_block}>
								<Ruble className={styles.ruble} />
							</div>
						</div>
						<Squircle className={styles.save_btn} cornerRadius={10} onClick={createAccount}>
							Сохранить
						</Squircle>
					</div>
				</div>
			)}
		</div>
	)
}
