import { action, makeObservable, observable } from "mobx";
import { Point } from "./Point";

export interface IVector {
    startpoint: Point
    endpoint: Point
    length?: number
    vhd?: string
    connectedVector?: Vector
}

export class Vector implements IVector {
    @observable startpoint: Point;
    @observable endpoint: Point;
    @observable length: number | undefined; 
    @observable vhd: string | undefined;
    connectedVector?: Vector | undefined;

    constructor(startpoint: Point, endpoint: Point){
        this.startpoint = startpoint
        this.endpoint = endpoint
        this.calculateLength()
        this.calculateVHD()
    }

    @action calculateLength() {
        this.length = Math.sqrt(Math.pow(this.xlength(), 2) + Math.pow(this.xlength(), 2))
    }

    @action calculateVHD(){
        if(this.xlength() == 0 && this.ylength() == 0){
            throw "Помилка: Нульовий вектор"
        }
        else {
            if(this.xlength() == 0){
                this.vhd = "vertical"
            }   
            else if (this.ylength() == 0){
                this.vhd = "horizontal"
            }   
            else {
                this.vhd = "diagonal"
            }
        }
    }
    
    @action connectVector(vec: Vector){
        this.connectedVector = vec
    }

    @action setNewLength(num: number){
        this.length = num
        this.moveConnectedVector() 
    }
    moveConnectedVector() {
        if(this.connectedVector != undefined && this.length != undefined){
            if (this.vhd = "horizontal") {
                this.connectedVector.moveVectorX(Math.sqrt(Math.pow(this.length,2) - Math.pow(this.ylength(), 2)) + this.startpoint.x)
            } 
            else if (this.vhd = "vertical"){
                this.connectedVector.moveVectorY(Math.sqrt(Math.pow(this.length,2) - Math.pow(this.xlength(), 2)) + this.startpoint.y)
            }
        }
    }

    @action moveVectorX(num: number) {
        this.startpoint.moveX(num)
        this.endpoint.moveX(num)
        this.calculateLength()
    }
    @action moveVectorY(num: number) {
        this.startpoint.moveY(num)
        this.endpoint.moveY(num)
        this.calculateLength()
    }

    xlength() {
        return this.endpoint.x - this.startpoint.x
    }

    ylength() {
        return this.endpoint.y - this.startpoint.y
    }
}