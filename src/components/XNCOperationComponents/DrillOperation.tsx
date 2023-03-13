import { observer } from "mobx-react";
import React from "react";
import { Circle, Group, Line, Text } from "react-konva";

type DrillParameters = {
    x:number;
    y:number;
    radius:number;
    partZ:number;
    deep:number;
    index: number;
}

export const DrillOperation: React.FC<DrillParameters> = observer(({x,y,radius, partZ, deep,index}) => {
    const st = () => {
        if (partZ <= deep){
            return "white"
        }
        return ""
    }


    return(
        <Group>
            <Circle x={x} y={y} radius={radius} stroke="red" fill={st()}></Circle>
            <Circle x={x} y={y} radius={1} stroke="red" strokeWidth={1}></Circle>
            <Line points={[x,y-radius-2,x,y+radius+2]} stroke="red"></Line>
            <Line points={[x-radius-2,y,x+radius+2,y]} stroke="red"></Line>
            <Text text={index.toString()} x={x + radius} y = {y + radius} fill="red"></Text>
        </Group>
    )
})