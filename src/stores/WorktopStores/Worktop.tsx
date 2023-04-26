import { action, makeObservable, observable } from "mobx";
import { Point } from "./Point";
import { Vector } from "./Vector";
import { v4 as uuidv4} from "uuid"

export interface IWorktop {
    id: string,
    points:(Point)[],
    vectors:(Vector)[]
}

export class Worktop implements IWorktop {
    id
    @observable points: Point[];
    @observable vectors: Vector[];
    constructor(points:Point[], vectors: Vector[]){
        this.id = uuidv4()
        this.points = points
        this.vectors = vectors
    }
}