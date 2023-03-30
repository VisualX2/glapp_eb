import { action, makeObservable, observable } from "mobx";
import * as op from "../logic_stuff/OperationObjects"

export class CornersStore {
    @observable private listCorners: (op.Cut|op.CornerCut|op.Radius|undefined)[]

    constructor() {
        this.listCorners = [undefined,undefined,undefined,undefined]
        makeObservable(this)
    }

    addOperation(cornerObject: op.Cut|op.CornerCut|op.Radius, corner: string){
        switch (corner) {
            case "topleft":
                this.listCorners[0] = cornerObject
                break;
            case "topright":
                this.listCorners[1] = cornerObject
                break;
            case "bottomleft":
                this.listCorners[2] = cornerObject
                break;
            case "bottomright":
                this.listCorners[3] = cornerObject
                break;
        }
    }

    @action getListCorners() {
        return this.listCorners
    }
}