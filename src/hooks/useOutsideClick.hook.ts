import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: VoidFunction) => {
    const ref = useRef()

    useEffect(() => {
        const handleClick = (event) => {
            // @ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [ref])

    return ref
}
