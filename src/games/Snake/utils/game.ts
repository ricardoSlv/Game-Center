import snake from './snake'

type point = [number, number]
type snakeMap = {
    snakeStart: point[],
    appleStart: point,
    bricks: point[]
}

const snakeMaps: snakeMap[] = [{
    snakeStart: [[10, 10]],
    appleStart: [14, 10],
    bricks: []
}, {
    snakeStart: [[7, 5]],
    appleStart: [12, 5],
    bricks: [[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],[6,16]]
}, {
    snakeStart: [[8, 9]],
    appleStart: [13, 9],
    bricks: [[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],
             [7,4],[8,4],[9,4],[10,4],[11,4],[12,4],[12,4],[13,4],[14,4],
             [7,15],[8,15],[9,15],[10,15],[11,15],[12,15],[12,15],[13,15],[14,15]
            ]
}, {
    snakeStart: [[3, 2]],
    appleStart: [8, 2],
    bricks: [[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[12,9],[13,9],[14,9],[15,9],[16,9],
             [3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[12,10],[13,10],[14,10],[15,10],[16,10],
             [9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,12],[9,13],[9,14],[9,15],[9,16],
             [10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,12],[10,13],[10,14],[10,15],[10,16],
            ]
}]

function containsPoint(points: point[], [pX, pY]: point): boolean {
    return points.some(([p2X, p2Y]) => p2X === pX && p2Y === pY)
}

function getValidApple([sizeX, sizeY]: [number, number], points: point[], bricks: point[]): point {
    let complete = false
    let [appleX, appleY] = [0, 0]

    while (complete === false) {
        appleX = Math.floor(Math.random() * sizeX)
        appleY = Math.floor(Math.random() * sizeY)
        if (containsPoint(points, [appleX, appleY]) === false && containsPoint(bricks, [appleX, appleY]) === false) {
            complete = true;
        }
    }
    return [appleX, appleY]
}

export default class game {
    size: [number, number];
    snake: snake;
    speed: number;
    bricks: point[]
    apple: point;
    snakeIsDead: boolean

    constructor(mapID:number) {
        const map = snakeMaps[mapID]
        this.size = [20, 20];
        this.speed = 1;
        this.bricks = map.bricks
        this.snake = new snake(map.snakeStart)
        this.apple = map.appleStart
        this.snakeIsDead = false
    }

    update(inputDirection: [number, number]) {
        if (this.snakeIsDead === true) {
            return
        }

        this.snake.updateDirection(inputDirection)
        const canEat = this.snake.canEat(this.apple)
        if (this.snake.willDie(this.size, this.bricks)) {
            this.snakeIsDead = true
            return;
        }
        if (canEat) {
            this.generateApple()
            this.speed = this.speed + 1;
        }
        this.snake.move(canEat);
        console.log(this.apple, this.bricks)
    }

    generateApple(): void {
        const newApple = getValidApple(this.size, this.snake.points, this.bricks);
        this.apple = newApple
    }

}
