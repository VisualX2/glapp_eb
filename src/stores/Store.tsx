import mobx, { action, makeObservable, observable } from "mobx"
import { TextureStore } from "./TextureStore"
import { PartStore } from "./PartStore"
import { UtilStore } from "./UtilStore"

export interface IStore {
    width: number,
    height: number,
    deep: number,
    parts: Array<PartStore>
}

export class Store implements IStore{
    @observable width = 0
    @observable height = 0
    @observable deep = 0
    @observable parts:(PartStore)[] = []
    textureStore: TextureStore;
    utilStore: UtilStore;
    


    constructor(){
        makeObservable(this)
        this.textureStore = new TextureStore()
        this.utilStore = new UtilStore()
    }

    @action addPart = (width: number, height: number, deepness: number) => {
        this.parts.push(new PartStore(width,height,deepness))
    }


    
}

