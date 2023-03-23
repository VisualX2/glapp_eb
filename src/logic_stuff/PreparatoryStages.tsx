import { Snackbar } from "@mui/material";

export const drillPrep = (x: number, y: number, depth: number, radius: number, side: string, partwidth: number,partheight: number) => {
    let maxX:number = 0
    let minX:number = 0
    let maxY:number = 0
    let minY:number = 0
    if(side === "front"){
        maxX = partwidth
        minX = 0
        maxY = partheight
        minY = 0
    }

    if(x - radius < minX || x + radius > maxX || y - radius < minY || y + radius > maxY){
        return "Свердління проводиться за межами деталі"
    }

    if(x - radius < minX + 5 || x + radius > maxX - 5 || y - radius < minY + 5 || y + radius > maxY - 5){
        return "Свердління має проводитися не більше ніж за 5 мм від краю деталі"
    }
    
    return "success"
};