import { BudgetIncomesGroupItem, BudgetIncomesMainGroupItem } from 'store/budget/budget-incomes/budget-incomes.type'
import { Button } from 'components/button/button'
import { FC, useState } from 'react'
import { RubleInput } from 'components/ruble-input/ruble-input'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './budget-incomes-main-group-item-edit.module.sass'
import { useAppDispatch } from 'hooks/redux.hook'
import {
	budgetIncomesMainGroupSalaryEdit,
	budgetIncomesMainGroupDepositEdit,
	budgetIncomesMainGroupSalaryReset,
	budgetIncomesMainGroupDepositReset,
} from 'store/budget/budget-incomes/budget-incomes.reducer'
import { DeleteModal } from 'components/delete-modal/delete-modal'

export const BudgetIncomesMainGroupItemEdit: FC<Props> = (props) => {
	const { close, item, variant } = props
	const dispatch = useAppDispatch()
	const methods = useForm({ defaultValues: item })
	const { register, handleSubmit } = methods
	const [isResetMenuOpen, setResetMenuOpen] = useState(false)

	const onFormSubmit = (data) => {
		if (variant === 'main') {
			dispatch(budgetIncomesMainGroupSalaryEdit(data))
		} else if (variant === 'deposit') {
			dispatch(budgetIncomesMainGroupDepositEdit(data))
		}
		close()
	}

	return (
		<FormProvider {...methods}>
			<form className={styles.main} onSubmit={handleSubmit(onFormSubmit)}>
				<div className={styles.header}>
					<div className={styles.title}>{variant === 'main' ? 'Зарплата' : 'Аванс'}</div>
					<div className={styles.actions}>
						<div className={styles.delete} onClick={() => setResetMenuOpen(true)}>
							Обнулить
						</div>
						<div className={styles.cancel} onClick={close}>
							Отменить
						</div>
					</div>
					{isResetMenuOpen && (
						<DeleteModal
							close={() => setResetMenuOpen(false)}
							text='Вы действительно хотите обнулить основной доход?'
							confirm={() => {
								if (variant === 'main') {
									dispatch(budgetIncomesMainGroupSalaryReset())
								} else {
									dispatch(budgetIncomesMainGroupDepositReset())
								}
								close()
							}}
							style={{
								width: '250px',
								height: '132px',
								top: '20%',
								right: '28%',
							}}
						/>
					)}
				</div>
				<div className={styles.content}>
					<RubleInput label='Сумма' {...register('price')} />
					<div className={styles.input_block}>
						<label htmlFor='start-date'>Число месяца</label>
						<input id='start-date' type='date' placeholder='5 число' {...register('date')} />
					</div>
				</div>
				<div className={styles.btn}>
					<Button text='Сохранить' />
				</div>
			</form>
		</FormProvider>
	)
}

type Props = {
	close: VoidFunction
	item: BudgetIncomesMainGroupItem
	variant: 'main' | 'deposit'
}
