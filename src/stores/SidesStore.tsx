import { action, makeObservable, observable } from "mobx";
import * as op from "../logic_stuff/OperationObjects"

export class SidesStore {
    @observable private listLeft: (op.SideGroove| op.PCut| op.СutFace)[]
    @observable private listRight: (op.SideGroove| op.PCut| op.СutFace)[]
    @observable private listTop: (op.SideGroove| op.PCut| op.СutFace)[]
    @observable private listBottom: (op.SideGroove| op.PCut| op.СutFace)[]

    constructor() {
        this.listLeft = []
        this.listRight = []
        this.listTop = []
        this.listBottom = []
        makeObservable(this)
    }
    

    addOperation(sideObject: op.SideGroove|op.PCut|op.СutFace, side: string){
        switch (side) {
            case "left":
                this.listLeft.push(sideObject)
                break;
            case "right":
                this.listRight.push(sideObject)
                break;
            case "top":
                this.listTop.push(sideObject)
                break;
            case "bottom":
                this.listBottom.push(sideObject)
                break;
        }
    }

    
}