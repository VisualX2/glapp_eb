import { action, observable } from "mobx"
import * as op from "../logic_stuff/OperationObjects"
import { v4 as uuidv4} from "uuid"

export interface IPartStore {
    id: string,
    width: number,
    height: number,
    deepness: number,
    operationList: Array<op.Cut|op.Drill|op.Radius|op.СutFace>
}

export class PartStore implements IPartStore{
    id
    @observable width
    @observable height
    @observable deepness
    @observable operationList: (op.Cut | op.Drill | op.Radius | op.СutFace)[]
    @observable selvedge:op.Selvedge

    constructor(width: number, height:number, deepness: number){
        this.width = width
        this.height = height
        this.deepness = deepness
        this.operationList = observable([])
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
    @action addDrillOperation(x:number, y:number, depth:number, radius:number, side:string){
        const d = new op.Drill(x,y,depth,radius,side)
        this.operationList.push(d)
        
    }
    @action addCutOperation(x:number, y:number, corner:string){
        const isCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace): op is op.Cut => true;
        var cc_clone = this.operationList.find(element => {
            
            if(isCut(element)){
                if(element.corner === corner){
                    return true
                }
            }
            return false
        })
        if(cc_clone !== undefined){
            if (isCut(cc_clone)){
                cc_clone.x = x
                cc_clone.y = y
            }
        }
        else{
            const d = new op.Cut(x,y,corner)
            this.operationList.push(d)
        }
        
    }
    addRadiusOperation(r_tl?:number, r_tr?:number, r_bl?:number, r_br?:number){
        const d = new op.Radius(r_tl,r_tr,r_bl,r_br)
        this.operationList.push(d)
    }
    @action addCutFaceOperation(angle:number, side:string){
        const isCutFace = (op: op.Drill|op.Cut|op.Radius|op.СutFace): op is op.СutFace => true;
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
    removeOperation(id:string){
        const indexOfObject = this.operationList.findIndex(object => {
            return object.id === id;
        });
        this.operationList.splice(indexOfObject, 1);
    }
}