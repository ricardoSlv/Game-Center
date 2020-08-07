import {useRef} from 'react'

import useKey from './useKey'

export default function useInputBuffer() {

    const keys = useRef([false,false,false,false])

    let keyu = useKey('ArrowUp');
    let keyd = useKey('ArrowDown');
    let keyl = useKey('ArrowLeft');
    let keyr = useKey('ArrowRight');

    const newKeys = [keyu, keyd, keyl, keyr]
    
    if(newKeys.includes(true)){
        keys.current.forEach((_,i)=>keys.current[i]=newKeys[i])
    }
    
    return keys.current
}
