import { observer } from "mobx-react";
import React from "react";
import { Rect, Group, Line, Text } from "react-konva";

type SideGrooveParameters = {
    x:number;
    y:number;
    x2:number;
    y2:number;
    depth:number;
    width:number;
    side:string;
    partwidth: number;
    partheight: number;
    
}

export const SideGrooveOperation: React.FC<SideGrooveParameters> = observer(({x,y,x2, y2,depth, width,side,partwidth,partheight}) => {

    const gr = () => {
        if(side === "left"){
            return <Group><Line points={[-y - 5,x,-y2 - 5,x2]} stroke="red" strokeWidth={width} opacity={0.5}></Line></Group>
        }
        else if(side === "right"){
            return <Group><Line points={[y + 5 + partwidth,x,y2 + 5 + partwidth,x2]} stroke="red" strokeWidth={width} opacity={0.5}></Line></Group>
        }
        else if(side === "top"){
            return <Group><Line points={[x,-y - 5,x2,-y2 - 5]} stroke="red" strokeWidth={width} opacity={0.5}></Line></Group>
        }
        else{
            return <Group><Line points={[x,y + partheight + 5,x2,y2 + partheight + 5]} stroke="red" strokeWidth={width} opacity={0.5}></Line></Group>
        }
    }
    return(
        <Group>
            {gr()}
        </Group>
    )
})