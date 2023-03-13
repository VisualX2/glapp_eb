import { action, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class Operation {
    id:string
    type?: string
    @observable x?:number
    @observable y?:number
    @observable depth?:number

    constructor(x?:number, y?:number, depth?:number) {
        this.id = uuidv4()
        this.x = x
        this.y = y
        this.depth = depth
        makeObservable(this)
    }
}

export class Drill{
    id:string
    type: string
    @observable x?:number
    @observable y?:number
    @observable depth?:number
    @observable radius:number
    @observable side:string
    
    constructor(x:number, y:number, depth:number, radius:number, side: string){
        this.id = uuidv4()
        this.x = x
        this.y = y
        this.depth = depth
        this.radius = radius
        this.side = side
        this.type = "drill"
        makeObservable(this)
    }
}


export class Cut {
    id:string
    type: string
    @observable x:number
    @observable y:number
    @observable corner:string
    constructor(x:number, y:number, corner:string){
        this.id = uuidv4()
        this.x = x
        this.y = y
        this.corner = corner
        this.type = "cut"
        makeObservable(this)
    }
}


export class СutFace {
    id:string
    type: string
    @observable angle:number
    @observable side: string
    constructor(angle:number, side:string){
        this.id = uuidv4()
        this.angle = angle
        this.side = side
        this.type = "cutface"
        makeObservable(this)
    }
}


export class Radius {
    id:string
    type: string
    @observable r:number
    @observable side:string


    constructor(r:number, side:string){
        this.id = uuidv4()
        this.type = "radius"
        this.r = r
        this.side = side
        makeObservable(this)
    }
}

export class Selvedge{
    @observable left:boolean
    @observable right:boolean
    @observable bottom:boolean
    @observable top:boolean

    constructor() {
        this.left = false
        this.bottom = false
        this.right = false
        this.top = false
        makeObservable(this)
    }

    @action switchLeft() {
        this.left = !this.left
    }
    @action switchRight() {
        this.right = !this.right
    }
    @action switchTop() {
        this.top = !this.top
    }
    @action switchBottom() {
        this.bottom = !this.bottom
    }
}




