import { useState, useEffect } from "react"

function useKey(key: string) {
    // Keep track of key state
    const [pressed, setPressed] = useState(false)

    // Does an event match the key we're watching?
    
    // Event handlers
    
    // Bind and unbind events
    useEffect(() => {
        const match = (event: Event) => {
            return key.toLowerCase() === (event as any).key.toLowerCase()
        }
        const onDown: EventListener = (event: Event):void => {
            if (match(event)&&pressed===false) setPressed(true)}
        const onUp: EventListener = (event: Event) => {
            if (match(event)&&pressed===true) setPressed(false)}
        
        window.addEventListener("keydown", onDown )
        window.addEventListener("keyup", onUp)
        
        return () => {
            window.removeEventListener("keydown", onDown)
            window.removeEventListener("keyup", onUp)
        }
    }, [key,pressed])

    return pressed
}

export default useKey;
