import { observer } from "mobx-react";
import React from "react";
import { Rect, Group, Line, Text } from "react-konva";

type GrooveParameters = {
    x:number;
    y:number;
    x2:number;
    y2:number;
    depth:number;
    width:number;
    
}

export const GrooveOperation: React.FC<GrooveParameters> = observer(({x,y,x2, y2,depth, width}) => {

    const gr = () => {
        
        return <Group><Line points={[x,y,x2,y2]} stroke="red" strokeWidth={width} opacity={0.5}></Line></Group>
        
    }
    return(
        <Group>
            {gr()}
        </Group>
    )
})