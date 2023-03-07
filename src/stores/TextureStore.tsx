import {observable, action} from "mobx"
import { TextureStoreItem } from "./TextureStoreItem"

export interface ITextureStore {
    textureArray: TextureStoreItem[]
}

export class TextureStore implements ITextureStore {
    @observable textureArray: TextureStoreItem[] = []

    @action
    addTexture(name: string, url: string) {
        let Txt = new TextureStoreItem(name, url)
        this.textureArray.push(Txt)
    } 
}