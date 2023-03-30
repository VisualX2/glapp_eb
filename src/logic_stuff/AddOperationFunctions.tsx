import { PartStore } from "../stores/PartStore";
import * as op from "../logic_stuff/OperationObjects"

export const addDrill = (selectedPart: PartStore, x:number, y:number, depth:number, radius:number, side:string) => {
    const d = new op.Drill(x,y,depth,radius,side)
    selectedPart.opStore.addDrill(d)
}