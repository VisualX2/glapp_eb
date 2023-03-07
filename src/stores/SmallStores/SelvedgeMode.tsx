import { action, makeObservable, observable } from "mobx";

export interface ISelvedgeMode {
    selvedgeMode: boolean
}

export class SelvedgeMode implements ISelvedgeMode {
    @observable selvedgeMode = false

    constructor() {
        makeObservable(this)
    }
    @action selvedgeModeSwitch() {
        this.selvedgeMode = !this.selvedgeMode
    }
    @action setSelvedgeModeFalse() {
        this.selvedgeMode = false
    }
    @action getSelvedgeMode(){
        return this.selvedgeMode
    }
} 