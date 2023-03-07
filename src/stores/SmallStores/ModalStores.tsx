import { action, makeObservable, observable } from "mobx";

export interface IModalSelectStore {
    modalOpened: boolean
}

export class ModalSelectStore {
    @observable modalOpened = false

    constructor() {
        makeObservable(this)
    }
    @action setModalSelectFalse() {
        this.modalOpened = false
    }
    @action setModalSelectTrue() {
        this.modalOpened = true
    }
    @action getModalSelect(){
        return this.modalOpened
    }
} 