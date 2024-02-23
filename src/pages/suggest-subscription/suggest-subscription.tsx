import { Squircle } from 'corner-smoothing'
import Close from 'assets/close.svg'
import styles from './suggest-subscription.module.sass'
import { Link } from 'react-router-dom'

export const SuggestSubscription = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Close className={styles.close} onClick={() => console.log('close')} />
                <h2 className={styles.title}>
                    Имеете доход больше <br /> <span className={styles.price}>50 000₽</span> в месяц?
                </h2>
                <p className={styles.subtitle}>
                    Больше данной суммы можно учитывать
                    <br /> на платном тарифе «Monene Plus»
                </p>
                <Squircle className={styles.button} cornerRadius={15} as='button'>
                    Оформить подписку
                </Squircle>
                <Link className={styles.free_trial} to='#'>Попробовать бесплатно</Link>
            </div>
        </div>
    )
}
