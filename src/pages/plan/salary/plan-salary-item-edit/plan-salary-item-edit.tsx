import { ChangeEvent, FC } from 'react'
import { PlanEarning, PlanExpense } from 'store/plan/plan-salary/plan-salary.types'
import { Squircle } from 'corner-smoothing'
import { useForm } from 'react-hook-form'
import Ruble from 'assets/ruble.svg'
import styles from './plan-salary-item-edit.module.sass'
import { useAppDispatch } from 'hooks/redux.hook'

export const PlanSalaryItemEdit: FC<Props> = (props) => {
	const { item, close, deleteFn, saveFn } = props
	const { register, handleSubmit } = useForm({ defaultValues: item })

	const onFormSubmit = (data) => {
		saveFn({ ...data, id: item.id })
		close()
	}

	return (
		<form className={styles.main} onSubmit={handleSubmit(onFormSubmit)}>
			<div className={styles.header}>
				<div className={styles.title}>Изменение разового дохода</div>
				<div className={styles.actions}>
					<div className={styles.delete} onClick={deleteFn}>
						Удалить
					</div>
					<div className={styles.cancel} onClick={close}>
						Отменить
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.input_block}>
					<label className={styles.label} htmlFor='name'>
						Название
					</label>
					<input {...register('name')} id='name' placeholder='Фриланс' />
				</div>
				<div className={styles.date_block}>
					<div className={styles.input_block}>
						<label className={styles.label} htmlFor='sum'>
							Сумма
						</label>
						<input {...register('price')} id='sum' type='number' placeholder='30 000' />
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
	deleteFn: VoidFunction
	item: any
	saveFn: (item: any) => void
}
