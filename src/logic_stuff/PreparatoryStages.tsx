import { Snackbar } from "@mui/material";
import { PartStore } from "../stores/PartStore";
import { isDrill } from "./CheckOps";
import { Drill } from "./OperationObjects";

export const drillPrep = (x: number, y: number, depth: number, radius: number, side: string, selectedPart: PartStore) => {
    let maxX:number = 0
    let minX:number = 0
    let maxY:number = 0
    let minY:number = 0
    if(side === "front"){
        maxX = selectedPart.width
        minX = 0
        maxY = selectedPart.height
        minY = 0
    }

    if(x - radius < minX || x + radius > maxX || y - radius < minY || y + radius > maxY){
        return "Свердління проводиться за межами деталі"
    }

    if(x - radius < minX + 5 || x + radius > maxX - 5 || y - radius < minY + 5 || y + radius > maxY - 5){
        return "Свердління має проводитися не менше ніж за 5 мм від краю деталі"
    }

    if(depth <= 0 || isNaN(depth)){
        return "Глибина свердління не може бути менша за 0"
    }

    if(depth > selectedPart.deepness){
        return "Глибина свердління не може бути більша за товщину деталі"
    }
    
    for(const child of selectedPart.getList()){
        console.log(selectedPart.getList())
        if(isDrill(child)){
            console.log("trew")
            if(!hasDistance(child, x, y, radius)){
                console.log("324243")
                return "Свердління має проводитися не менше ніж за 5 мм від іншого отвору"
            }
        }
    }

    return "success"
};


const hasDistance = (dr: Drill, x: number, y: number, radius: number) => {
    const dx = dr.x - x;
    const dy = dr.y - y;
    let angle = Math.atan2(-dy, dx);

    const arrowStart = {
        x: dr.x + -radius * Math.cos(angle + Math.PI),
        y: dr.y + radius * Math.sin(angle + Math.PI)
    };
    const arrowEnd = {
        x: x + -radius * Math.cos(angle),
        y: y + radius * Math.sin(angle)
    };

    let distance = Math.sqrt((arrowEnd.x - arrowStart.x)^2 + (arrowEnd.y - arrowStart.y)^2)
    console.log(distance)
    if (distance < 5){
        
        return false
    }
    
    return true
}