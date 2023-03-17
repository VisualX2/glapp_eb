import { observer } from "mobx-react";
import React from "react";
import { Group, Line, Rect } from "react-konva";

type PCutParameters = {
    xgap: number;
    width: number;
    height: number;
    side: string;
    partwidth: number;
    partheight: number;
}

export const PCutOperation: React.FC<PCutParameters> = observer(({xgap, width, height, side, partwidth, partheight}) => {

    const bC = () => {
            if(side === "left") {
                return <Group><Rect x={0} y = {xgap} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={0} y = {xgap} width={width} height={height} stroke="red" ></Rect></Group>
            }
            else if(side === "right") {
                return <Group><Rect x={partwidth - width} y = {xgap} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={partwidth - width} y = {xgap} width={width} height={height} stroke="red" ></Rect></Group>
            }
            else if(side === "top") {
                return <Group><Rect x={xgap} y = {0} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={xgap} y = {0} width={width} height={height} stroke="red" ></Rect></Group>
            }
            else {
                return <Group><Rect x={xgap} y = {partheight - height} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={xgap} y = {partheight - height} width={width} height={height} stroke="red" ></Rect></Group>
            }
    }

    return(
        <Group>{bC()}</Group>
    )
})