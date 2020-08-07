
import useKey from './useKey'

export default function useDirection() {

    let keyu = useKey('ArrowUp');
    let keyd = useKey('ArrowDown');
    let keyl = useKey('ArrowLeft');
    let keyr = useKey('ArrowRight');
    const [u,d,l,r] = [keyu, keyd, keyl, keyr].map(key=>key? 1 : 0)

    console.log('dir render',keyu,keyd,keyl,keyr)
    return [u-d,l-r]
}
