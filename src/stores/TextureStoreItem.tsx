import { v4 as uuidv4 } from "uuid"

export interface ITextureItem {
    id: string
    name:string
    url:string
}

export class TextureStoreItem implements ITextureItem {
    id = uuidv4()
    name = ""
    url = ""
    constructor(name: string, url: string){
        this.name = name
        this.url = url
    }
}
