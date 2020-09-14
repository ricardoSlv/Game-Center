import {useRef} from 'react'

import useKey from './useKey'

export default function useInputBuffer(Id:number) {
    //input is reset on a new Id
    const buffer = useRef({id:Id,keys:[false,false,false,false]})

    let keyu = useKey('ArrowUp');
    let keyd = useKey('ArrowDown');
    let keyl = useKey('ArrowLeft');
    let keyr = useKey('ArrowRight');

    const newKeys = [keyu, keyd, keyl, keyr]
    
    if(Id!==buffer.current.id){
        buffer.current={id:Id,keys:[false,false,false,false]}
    }
    else if(newKeys.includes(true)){
        buffer.current.keys.forEach((_,i)=>buffer.current.keys[i]=newKeys[i])
    }
    
    return buffer.current.keys.map(x => x ? 1 : 0)
}
