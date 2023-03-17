import { observer } from "mobx-react";
import React from "react";
import { Group, Line, Rect } from "react-konva";

type CornerCutParameters = {
    width: number;
    height: number;
    corner: string;
    partwidth: number;
    partheight: number;
}

export const CornerCutOperation: React.FC<CornerCutParameters> = observer(({width, height, corner, partwidth, partheight}) => {

    const bC = () => {
            if(corner === "topleft") {
                return <Group><Rect x={0} y = {0} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={0} y = {0} width={width} height={height} stroke="red" ></Rect></Group>
            }
            else if(corner === "topright") {
                return <Group><Rect x={partwidth - width} y = {0} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={partwidth - width} y = {0} width={width} height={height} stroke="red" ></Rect></Group>
            }
            else if(corner === "bottomleft") {
                return <Group><Rect x={0} y = {partheight - height} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={0} y = {partheight - height} width={width} height={height} stroke="red" ></Rect></Group>
            }
            else {
                return <Group><Rect x={partwidth - width} y = {partheight - height} width={width} height={height} fill="red" opacity={0.6}></Rect><Rect x={partwidth - width} y = {partheight - height} width={width} height={height} stroke="red" ></Rect></Group>
            }
    }

    return(
        <Group>{bC()}</Group>
    )
})