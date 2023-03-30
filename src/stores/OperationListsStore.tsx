import { action, makeObservable, observable } from "mobx";
import * as op from "../logic_stuff/OperationObjects"

export class OperationListsStore {
    @observable private drills: (op.Drill)[]

    constructor(){
        this.drills = []
        makeObservable(this)
    }

    @action getDrills() {
        return this.drills
    }

    @action addDrill(x:number, y:number, depth:number, radius:number, side:string){
        const d = new op.Drill(x,y,depth,radius,side)
        this.drills.push(d)
    }

    @action removeDrill(id:string){
        const indexOfObject = this.drills.findIndex(object => {
            return object.id === id;
        });
        this.drills.splice(indexOfObject, 1);
    } 
        
}