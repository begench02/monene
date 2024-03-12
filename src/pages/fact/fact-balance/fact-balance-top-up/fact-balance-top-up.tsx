import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { RubleInput } from 'components/ruble-input/ruble-input'
import Close from 'assets/close.svg'
import styles from './fact-balance-top-up.module.sass'

export const FactBalanceTopUp: FC<Props> = (props) => {
	const { close } = props
	const methods = useForm()

	const onFormSubmit = (data) => {
		console.log(data)
	}

	return (
		<FormProvider {...methods}>
			<form className={styles.main} onSubmit={methods.handleSubmit(onFormSubmit)}>
				<div className={styles.header}>
					<div className={styles.title}>Пополнение баланса</div>
					<Close className={styles.close} onClick={close} />
				</div>
				<div>
					<RubleInput label='Сумма' />
				</div>
			</form>
		</FormProvider>
	)
}

type Props = {
	close: VoidFunction
}

{
	/* <div className={styles.input_block}>
                    <label className={styles.label} htmlFor='title'>
                        Название
                    </label>
                    <input
                        className={styles.input}
                        id='title'
                        value={state.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            dispatch({ type: 'change-name', payload: e.target.value })
                        }
                    />
                </div> */
}
