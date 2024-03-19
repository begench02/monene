import { SubscriptionEnded } from './subscription-ended/subscription-ended'
import { SubscriptionSuspend } from './subscription-suspend/subscription-suspend'
import styles from './subscription.module.sass'

export const Subscription = () => {
	return (
		<div>
			<SubscriptionEnded />
		</div>
	)
}
