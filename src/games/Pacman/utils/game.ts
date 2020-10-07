
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

type updateStatus = 'good' | 'blocked'
type point = [number, number]
type searchNode = { point: point, cost: number, path: point[] }

function getPath(pos: point, goal: point, map: number[][]) {
    const visitedArray: point[] = []
    const searchArray: searchNode[] = [{ point: pos, cost: 0, path: [] }]
    let minNode
    while (searchArray.length > 0 && !containsPoint(searchArray.map(x => x.point), goal)) {
        minNode = findMinAndRemove(searchArray, goal)
        expandNode(minNode, searchArray, visitedArray, map)
        visitedArray.push(minNode.point)
    }

    console.log('stoped', searchArray.length, containsPoint(searchArray.map(x => x.point), goal), searchArray[searchArray.length - 1], goal);

    //searchArray.filter(({ point}) => equalsPoint(point, goal))
    return (searchArray[searchArray.length - 1] && searchArray[searchArray.length - 1].path) || []
}

function containsPoint(points: point[], [pL, pC]: point): boolean {
    return points.some(([p2L, p2C]) => p2L === pL && p2C === pC)
}

function euclidianDist([p1L, p1C]: point, [p2L, p2C]: point) {
    return (p1L - p2L) ^ 2 + (p1C - p2C) ^ 2
}

function equalsPoint([p1L, p1C]: point, [p2L, p2C]: point) {
    return (p1L === p2L && p1C === p2C)
}

function findMinAndRemove(searchArray: searchNode[], goal: point): searchNode {
    let minCost = Infinity
    let minNode: searchNode = searchArray[0]
    searchArray.forEach((node) => {
        if ((euclidianDist(node.point, goal) + node.cost) < minCost) {
            minNode = node
            minCost = (euclidianDist(node.point, goal) + node.cost)
        }
    })

    const minIndex = searchArray.findIndex(n => equalsPoint(n.point, minNode.point))
    searchArray.splice(minIndex, 1);

    return minNode

}

function expandNode({ point: [posL, posC], cost, path }: searchNode, searchArray: searchNode[], visitedArray: point[], map: number[][]) {

    const posLUp: point = [(posL + 1 + sizeL) % sizeL, posC]
    const posLDown: point = [(posL - 1 + sizeL) % sizeL, posC]
    const posCRight: point = [posL, (posC + 1 + sizeC) % sizeC]
    const posCLeft: point = [posL, (posC - 1 + sizeC) % sizeC]
    const pointList = [posLUp, posLDown, posCLeft, posCRight]

    const notVisited = pointList.filter(p => !containsPoint(visitedArray, p))
    const notVisitednotWall = notVisited.filter(([posL, posC]) => map[posL][posC] !== 1)

    const addedPath = path.concat([[posL, posC]])
    notVisitednotWall.forEach(x => searchArray.push({ point: x, cost: cost + 1, path: addedPath }))

}

export default class game {
    position: point
    direction: [number, number]
    grubbers: point[]
    map: number[][]
    moveHistory: point[]

    constructor() {
        this.position = [1, 1]
        this.direction = [0, 1]
        this.map = initialMap
        this.moveHistory = [[25, 19], [24, 19], [23, 19], [23, 18], [23, 17], [23, 16], [23, 15], [22, 15], [21, 15], [20, 15], [19, 15], [18, 15], [17, 15], [16, 15], [15, 15], [14, 15], [13, 15], [13, 14], [13, 13], [12, 13], [11, 13], [10, 13], [10, 12], [10, 11], [10, 10], [10, 9], [9, 9], [8, 9], [8, 8], [8, 7], [7, 7], [6, 7], [5, 7], [5, 6], [5, 5], [5, 4], [5, 3], [5, 2], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1]]
        this.grubbers = [[25, 19], [25, 18]]
    }

    update(inputDirection: [number, number]): updateStatus {

        let status: updateStatus = 'good'

        const [posL, posC] = this.position
        const [dirL, dirC] = this.direction
        let [inptL, inptC] = inputDirection
        let [newDirL, newDirC] = inputDirection

        if (inptC === 0 && inptL === 0) {
            [newDirL, newDirC] = this.direction
        }
        //normalized L=>[0,26] C=>[0,20]
        const nextPosL = (posL + newDirL + sizeL) % sizeL
        const nextPosC = (posC + newDirC + sizeC) % sizeC

        //following current direction
        const nextPosLD = (posL + dirL + sizeL) % sizeL
        const nextPosCD = (posC + dirC + sizeC) % sizeC


        const nextPosPieceL = this.map[nextPosL][posC]
        const nextPosPieceC = this.map[posL][nextPosC]
        const nextPosPieceD = this.map[nextPosLD][nextPosCD]

        if (newDirL !== 0 && nextPosPieceL !== 1) {
            this.moveHistory.push(this.position)
            this.position = [nextPosL, posC]
            this.direction = [newDirL, 0]
            this.map[nextPosL][posC] = 0
        }
        else if (newDirC !== 0 && nextPosPieceC !== 1) {
            this.moveHistory.push(this.position)
            this.position = [posL, nextPosC]
            this.direction = [0, newDirC]
            this.map[posL][nextPosC] = 0
        }
        else if (nextPosPieceD !== 1) {
            this.moveHistory.push(this.position)
            this.position = [nextPosLD, nextPosCD]
            this.map[nextPosLD][nextPosCD] = 0
            status = 'blocked'
        }

        const path = getPath(this.grubbers[0], this.position, this.map)
        console.log(`[${path.map(([x, y]) => '[' + x + ',' + y + ']')}]`, this.position)

        this.grubbers[0] = path.length > 1 ? path[1] : this.position;
        this.grubbers[1] = this.moveHistory.shift() || this.position

        return status
    }

}