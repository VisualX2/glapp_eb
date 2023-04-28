import { action, observable, makeObservable } from "mobx"
import { ModalSelectStore } from "./SmallStores/ModalStores"
import { SelvedgeMode } from "./SmallStores/SelvedgeMode"

export interface IUtilStore {
    mainmenudrawerstate: boolean
    selectedpart: string
    modalsel: ModalSelectStore
    sevst: SelvedgeMode
}


export class UtilStore implements IUtilStore{
    
    @observable mainmenudrawerstate = true
    @observable operationmenudrawerstate = false
    @observable selectedpart = ""
    @observable modalsel
    @observable sevst

    
    constructor() {
        makeObservable(this)
        this.modalsel = new ModalSelectStore()
        this.sevst = new SelvedgeMode()
    }

    @action setSelectedPart(id:string){
        this.selectedpart = id
    }
    @action getSelectedPart() {
        return this.selectedpart
    }

    @action setMainMenuFalse() {
        this.mainmenudrawerstate = false
    }
    @action setMainMenuTrue() {
        this.mainmenudrawerstate = true
    }
    @action getMainMenu(){
        return this.mainmenudrawerstate
    }
    @action setOperationMenuFalse() {
        this.operationmenudrawerstate = false
    }
    @action setOperationMenuTrue() {
        this.operationmenudrawerstate = true
    }
    @action getOperationMenu(){
        return this.operationmenudrawerstate
    }
}