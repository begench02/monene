import clsx from 'clsx'
import cs from './index.module.sass'

export const progressBar = (step = 1) => {
	return (
		<div className={cs.progress}>
			{Array.from(Array(11)).map((_, idx) => {
				if (idx + 1 <= step) {
					return <div className={clsx(cs.progress_bar, cs.progress_bar__fill)} key={`${step}-${idx}`}></div>
				}
				return <div className={clsx(cs.progress_bar, cs.progress_bar__empty)} key={`${step}-${idx}`}></div>
			})}
		</div>
	)
}
