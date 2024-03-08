import { FC } from 'react'
import { Squircle } from 'corner-smoothing'
import Ruble from 'assets/ruble.svg'
import styles from './plan-advance-item-create.module.sass'
import { useForm } from 'react-hook-form'

export const PlanAdvanceItemCreate: FC<Props> = (props) => {
	const { close, saveFn } = props
	const { register, handleSubmit } = useForm()

	const onFormSubmit = (data) => {
		saveFn(data)
		close()
	}

	return (
		<form className={styles.main} onSubmit={handleSubmit(onFormSubmit)}>
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
					<input id='name' placeholder='Фриланс' {...register('name')} />
				</div>
				<div className={styles.date_block}>
					<div className={styles.input_block}>
						<label className={styles.label} htmlFor='price'>
							Сумма
						</label>
						<input id='price' type='number' placeholder='30 000' {...register('price')} />
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
		</form>
	)
}

type Props = {
	close: VoidFunction
	saveFn: (item) => void
}
