type point = [number,number]

function addPoints(point1:point,point2:point):point {
    return ([point1[0]+point2[0],
            point1[1]+point2[1]])
}

export default class snake {
    points: point[];
    moveVector: point;
    length: number;

    constructor(initialPos: point[] | undefined){
       this.points = initialPos || [[0,0]];
       this.moveVector = [1,0]
       this.length = initialPos?.length || 1;
    }

    updateDirection([inputX,inputY]:[number,number]){
        const [moveX,moveY] = this.moveVector;

        if(moveX===0&&inputX!==0){
            this.moveVector=[inputX,0]
            return
        }
        else if(moveY===0&&inputY!==0){
            this.moveVector=[0,inputY]
            return
        } 
    }

    move(atApple:boolean):void {
        this.points=[addPoints(this.points[0],this.moveVector)].concat(this.points)
        if(atApple===false){
           this.points=this.points.slice(0,-1);
        }
        else{
            this.length++
        }
    }

    willDie([sizeX,sizeY]:[number,number]){
        const [headX,headY]=addPoints(this.points[0],this.moveVector)

        return  (headX>=sizeX||headY>=sizeY||headX<0||headY<0||
                this.points.some(([px,py])=>px===headX&&py===headY))
    }

    canEat([appleX,appleY]:point){
        const [biteX,biteY]=addPoints(this.points[0],this.moveVector)
        
        return biteX===appleX&&biteY===appleY
    }

}
