import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: VoidFunction) => {
    const ref = useRef()

    useEffect(() => {
        const handleClick = (event) => {
            console.log(event)
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
