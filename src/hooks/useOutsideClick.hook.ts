import { useEffect } from 'react'

export const useOutsideClick = (elRef, callback: VoidFunction, attached = true) => {
	useEffect(() => {
		if (!attached) return
		const handleClick = (event) => {
			if (!elRef.current) return
			if (!elRef.current.contains(event.target)) {
				callback()
			}
		}
		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [elRef, callback, attached])
}
