import { action, makeObservable, observable } from "mobx";
import * as op from "../logic_stuff/OperationObjects"

export class CornersStore {
    @observable topLeft: op.Cut|op.CornerCut|op.Radius|undefined
    @observable topRight: op.Cut|op.CornerCut|op.Radius|undefined
    @observable bottomLeft: op.Cut|op.CornerCut|op.Radius|undefined
    @observable bottomRight: op.Cut|op.CornerCut|op.Radius|undefined

    constructor() {
        this.topLeft = undefined
        this.topRight = undefined
        this.bottomLeft = undefined
        this.bottomRight = undefined
        makeObservable(this)
    }

    addCutOperation(cornerObject: op.Cut|op.CornerCut|op.Radius, corner: string){
        switch (corner) {
            case "topleft":
                this.topLeft = cornerObject
                break;
            case "topright":
                this.topRight = cornerObject
                break;
            case "bottomleft":
                this.bottomLeft = cornerObject
                break;
            case "bottomright":
                this.bottomRight = cornerObject
                break;
        }
    }
}