const sizeL = 27
const sizeC = 21

/*
    0-Empty
    1-Block 
    2-Food 
    3-Bigfood
*/ 
export const initialMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 3, 1, 0, 1, 2, 1, 0, 1, 2, 1, 2, 1, 0, 1, 2, 1, 0, 1, 3, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 3, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 3, 1],
    [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

type updateStatus = 'good'|'blocked'

export default class game {
    position: [number, number]
    direction: [number, number]
    map: number[][]

    constructor() {
        this.position = [1, 1]
        this.direction = [0, 1]
        this.map = initialMap
    }

    update(inputDirection: [number, number]):updateStatus {

        let status: updateStatus='good'

        const [posL,posC] = this.position
        const [dirL,dirC]=this.direction
        let [inptL,inptC] = inputDirection
        let [newDirL,newDirC] = inputDirection
        
        if(inptC===0&&inptL===0){
            [newDirL,newDirC]=this.direction
        }
        //normalized L=>[0,26] C=>[0,20]
        const nextPosL=(posL+newDirL+sizeL)%sizeL
        const nextPosC=(posC+newDirC+sizeC)%sizeC

        //following current direction
        const nextPosLD=(posL+dirL+sizeL)%sizeL
        const nextPosCD=(posC+dirC+sizeC)%sizeC
        
        console.log('pos',posL,posC)
        console.log('nxtpos',nextPosL,nextPosC);
        console.log('inpt',inptL,inptC);
        console.log('dir',newDirL,newDirC);
        
        const nextPosPieceL = this.map[nextPosL][posC]
        const nextPosPieceC = this.map[posL][nextPosC]
        const nextPosPieceD = this.map[nextPosLD][nextPosCD]
        
        if (newDirL!==0&&nextPosPieceL !== 1) {
            this.position=[nextPosL,posC]
            this.direction=[newDirL,0]
            this.map[nextPosL][posC] = 0
            console.log('dir update on L')
        }
        else if (newDirC!==0&&nextPosPieceC !== 1) {
            this.position=[posL,nextPosC]
            this.direction=[0,newDirC]
            this.map[posL][nextPosC] = 0
            console.log('dir update on C')
        }
        else if(nextPosPieceD!==1){
            this.position=[nextPosLD,nextPosCD]
            this.map[nextPosLD][nextPosCD] = 0
            status='blocked'
            console.log('dir update on D')
        }

        return status
    }

}