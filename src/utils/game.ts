import snake from './snake'

type point = [number,number]

function containsPoint(points:point[],[pX,pY]:point):boolean{
    return points.some(([p2X,p2Y])=>p2X===pX&&p2Y===pY)
}

function getValidApple([sizeX,sizeY]:[number,number],points:point[],bricks:point[]):point{
    let complete=false
    let [appleX,appleY]=[0,0]

    while(complete===false){
        appleX=Math.floor(Math.random()*sizeX)
        appleY=Math.floor(Math.random()*sizeY)
        if(containsPoint(points,[appleX,appleY])===false&&containsPoint(bricks,[appleX,appleY])===false){
            complete=true;
        }
    }
    return[appleX,appleY]
}

export default class game {
    size: [number,number];
    snake: snake;
    speed: number;
    bricks:point[]
    apple: point;
    snakeIsDead: boolean

    constructor(sizeX: number, sizeY: number){
        this.size = [sizeX,sizeY];
        this.speed=1;
        this.bricks=[[Math.floor(sizeX/3),Math.floor(sizeY/2)-1],[Math.floor(sizeX/3),Math.floor(sizeY/2)],[Math.floor(sizeX/3),Math.floor(sizeY/2)+1],[Math.floor(sizeX/3),Math.floor(sizeY/2)+2],[Math.floor(sizeX/3),Math.floor(sizeY/2)-2]]
        this.snake = new snake([[Math.floor(sizeX/2),Math.floor(sizeY/2)]])
        this.apple = [Math.floor(sizeX/1.5),Math.floor(sizeY/2)]
        this.snakeIsDead=false
    }

    update(inputDirection:[number,number]){
        if(this.snakeIsDead===true){
            return
        }

        this.snake.updateDirection(inputDirection)
        const canEat = this.snake.canEat(this.apple)
        if(this.snake.willDie(this.size,this.bricks)){
            this.snakeIsDead=true
            return;
        }
        if(canEat){
            this.generateApple()
            this.speed=this.speed+1;
        }
        this.snake.move(canEat);
        console.log(this.apple,this.bricks)
    }

    generateApple():void {
        const newApple = getValidApple(this.size,this.snake.points,this.bricks);
        this.apple = newApple
    }

}
