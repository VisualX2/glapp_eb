import { action, makeObservable, observable } from "mobx";

export interface IPoint {
    x: number,
    y: number,
    corner:string
}

export class Point implements IPoint {
    x: number;
    y: number;

    corner: string;
    constructor(x:number, y:number, corner: string){
        this.x = x
        this.y = y
        this.corner = corner
        makeObservable(this)
    }

    @action moveX(num:number){
        this.x = num
    }

    @action moveY(num:number) {
        this.y = num
    }
}