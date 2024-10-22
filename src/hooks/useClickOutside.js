import { useEffect } from "react"


export function useClickOutside(ref, cb){
    const handleClick = (event) => {
        console.log(`Start handleClick`, ref.current)
        if(ref.current && !ref.current.contains(event.target)){
            console.log(true)
           cb()
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    })
}