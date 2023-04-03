import { PartStore } from "../stores/PartStore";
import * as op from "../logic_stuff/OperationObjects"

export const addDrill = (selectedPart: PartStore, x:number, y:number, depth:number, radius:number, side:string) => {
    const d = new op.Drill(x,y,depth,radius,side)
    selectedPart.opStore.addDrill(d)
}

export const addCut = (selectedPart: PartStore, x:number, y:number, corner:string) => {
    const d = new op.Cut(x,y,corner)
    selectedPart.opStore.corners.addOperation(d,corner)
}

export const addRadius = (selectedPart: PartStore, radius:number, corner:string) => {
    const d = new op.Radius(radius,corner)
    selectedPart.opStore.corners.addOperation(d,corner)
}

export const addCornerCut = (selectedPart: PartStore, width:number, height: number, corner: string) => {
    const d = new op.CornerCut(width,height,corner)
    selectedPart.opStore.corners.addOperation(d,corner)
}

