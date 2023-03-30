import { action, observable } from "mobx"
import * as op from "../logic_stuff/OperationObjects"
import { v4 as uuidv4} from "uuid"
import { isCut, isCutFace, isRadius } from "../logic_stuff/CheckOps"
import { OperationListsStore } from "./OperationListsStore"

export interface IPartStore {
    id: string,
    width: number,
    height: number,
    deepness: number,
    operationList: Array<op.Cut|op.Drill|op.Radius|op.СutFace|op.Groove| op.SideGroove|op.PCut|op.CornerCut>,
    opStore: OperationListsStore
}

export class PartStore implements IPartStore{
    id
    @observable width
    @observable height
    @observable deepness
    @observable operationList: (op.Cut | op.Drill | op.Radius | op.СutFace |op.Groove| op.SideGroove|op.PCut|op.CornerCut)[]
    @observable selvedge:op.Selvedge
    @observable opStore: OperationListsStore

    constructor(width: number, height:number, deepness: number){
        this.width = width
        this.height = height
        this.deepness = deepness
        this.operationList = observable([])
        this.opStore = new OperationListsStore()
        this.id = uuidv4()
        this.selvedge = new op.Selvedge()
    }

    @action getPartId() {
        return this.id
    }

    setSizes(width:number, height:number){
        this.width = width
        this.height = height
    }
    @action getList(){
        return this.operationList
    }

    @action addCutFaceOperation(angle:number, side:string){
        var cf_clone = this.operationList.find(element => {
            
            if(isCutFace(element)){
                if(element.side === side){
                    return true
                }
            }
            return false
        })
        if(cf_clone !== undefined){
            if (isCutFace(cf_clone)){
                cf_clone.angle = angle
            }
        }
        else{
            const d = new op.СutFace(angle, side)
            this.operationList.push(d)
        }
    }

    @action addGrooveOperation(x: number, y:number, x2: number, depth: number, y2: number, width: number){
        const d = new op.Groove(x,y,x2,depth,y2,width)
        this.operationList.push(d)
    }

    @action addSideGrooveOperation(x: number, y:number, x2: number, y2: number, depth: number, width:number, side:string){
        const d = new op.SideGroove(x,y,x2,y2,depth,width,side)
        this.operationList.push(d)
    }

    @action addPCut(xgap:number, width:number, height: number, side: string){
        const d = new op.PCut(xgap, width, height, side)
        this.operationList.push(d)
    }

    @action removeOperation(id:string){
        const indexOfObject = this.operationList.findIndex(object => {
            return object.id === id;
        });
        this.operationList.splice(indexOfObject, 1);
    }
}