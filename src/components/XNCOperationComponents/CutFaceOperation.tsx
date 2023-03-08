import { observer } from "mobx-react";
import React from "react";
import { Group, Line } from "react-konva";

type CutFaceParameters = {
    angle:number;
    side:string;
    partwidth:number;
    partheight:number;
    partdepth:number;
}

export const CutFaceOperation: React.FC<CutFaceParameters> = observer(({angle,side,partwidth,partheight,partdepth}) => {
    var rad = (90 - angle) * Math.PI/180;
    const dist = Math.tan(rad) * partdepth


    const bC = () => {
        if (side === "left") {
            return <Group><Line points={[dist,0,dist,partheight]} stroke="red" dash={[5,2]}></Line><Line points={[dist, -5,0,-5 - partdepth]} stroke="red" dash={[5,2]}></Line><Line points={[dist, partheight + 5,0,partheight + 5 + partdepth]} stroke="red" dash={[5,2]}></Line></Group>
        }
        else if(side === "right"){
            return <Group><Line points={[partwidth - dist,0,partwidth - dist,partheight]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth - dist, -5,partwidth,-5 - partdepth]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth - dist, partheight + 5,partwidth,partheight + 5 + partdepth]} stroke="red" dash={[5,2]}></Line></Group>
        }
        else if(side === "top"){
            return <Group><Line points={[0,dist,partwidth,dist]} stroke="red" dash={[5,2]}></Line><Line points={[-5, dist,-5 - partdepth,0]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth + 5, dist,partwidth + 5 + partdepth, 0]} stroke="red" dash={[5,2]}></Line></Group>
        }
        else{
            return <Group><Line points={[0,partheight - dist,partwidth,partheight - dist]} stroke="red" dash={[5,2]}></Line><Line points={[-5, partheight - dist,-5 - partdepth,partheight]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth + 5, partheight - dist,partwidth + 5 + partdepth,partheight]} stroke="red" dash={[5,2]}></Line></Group>
        }
    }

    return(<Group>{bC()}</Group>)
})