import { action, makeObservable, observable } from "mobx";

export interface IErrorStore {
    ErrorString: String
}

export class ErrorStore {
    @observable ErrorString

    constructor(ErrorString:String) {
        this.ErrorString = ErrorString
        makeObservable(this)
    }
} 