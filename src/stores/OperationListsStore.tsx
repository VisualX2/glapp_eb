import { action, makeObservable, observable } from "mobx";
import * as op from "../logic_stuff/OperationObjects"
import { CornersStore } from "./CornersStore";

export class OperationListsStore {
    @observable private drills: (op.Drill)[]
    @observable corners: CornersStore
    

    constructor(){
        this.drills = []
        this.corners = new CornersStore()
        makeObservable(this)
    }

    @action getDrills() {
        return this.drills
    }

    @action addDrill(d:op.Drill){
        this.drills.push(d)
    }

    @action removeDrill(id:string){
        const indexOfObject = this.drills.findIndex(object => {
            return object.id === id;
        });
        this.drills.splice(indexOfObject, 1);
    } 
        
}