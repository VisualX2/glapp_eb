import { observer } from "mobx-react"
import { useStore } from "../stores/StoreContext"
import { Circle, Layer, Rect, Stage } from "react-konva"
import { PartStore } from "../stores/PartStore"
import "../styles/EditPartStage.css"
import * as op from "../logic_stuff/OperationObjects"
import { DrillOperation } from "./XNCOperationComponents/DrillOperation"
import { CutOperation } from "./XNCOperationComponents/CutOperation"
import { CutFaceOperation } from "./XNCOperationComponents/CutFaceOperation"
import { RadiusOperation } from "./XNCOperationComponents/RadiusOperation"
import { GrooveOperation } from "./XNCOperationComponents/GrooveOperation"
import { isCornerCut, isCornerCutOp, isCut, isCutFace, isCutOp, isDrill, isGroove, isPCut, isRadius, isRadiusOp, isSideGroove } from "../logic_stuff/CheckOps"
import { SideGrooveOperation } from "./XNCOperationComponents/SideGrooveOperation"
import { PCutOperation } from "./XNCOperationComponents/PCutOperation"
import { CornerCutOperation } from "./XNCOperationComponents/CornerCutOperation"

type EditPartStage = {
    part:string;
}

export const EditPartStage: React.FC<EditPartStage> = observer(({part}): React.ReactElement => {
    const store = useStore()
    var selectedPart = store.parts.find(i => i.getPartId() === part)!
    selectedPart.getList().map(() => true);
    console.log(store.parts)
    console.log(store.utilStore.getSelectedPart())
    console.log(store.parts.find(i => console.log(i.getPartId())))

    const selvedges = () => {
        var sel = []
        if(selectedPart.selvedge.top === true){
            sel.push(<Rect y = {-selectedPart.deepness - 5} width={selectedPart.width} height={selectedPart.deepness} fill="#e65a19" stroke="black"
            onClick={() => {
                if(store.utilStore.sevst.selvedgeMode === true){
                    selectedPart.selvedge.switchTop()
                }
        }}></Rect>)
        }
        if(selectedPart.selvedge.bottom === true){
            sel.push(<Rect y = {selectedPart.height + 5 } width={selectedPart.width} height={selectedPart.deepness} fill="#e65a19" stroke="black"
            onClick={() => {
                if(store.utilStore.sevst.selvedgeMode === true){
                    selectedPart.selvedge.switchBottom()
                }
        }}></Rect>)
        }
        if(selectedPart.selvedge.left === true){
            sel.push(<Rect x = {-selectedPart.deepness- 5} width={selectedPart.deepness} height={selectedPart.height} fill="#e65a19" stroke="black"
            onClick={() => {
                if(store.utilStore.sevst.selvedgeMode === true){
                    selectedPart.selvedge.switchLeft()
                }
        }}></Rect>)
        }
        if(selectedPart.selvedge.right === true){
            sel.push(<Rect x = {selectedPart.width + 5} width={selectedPart.deepness} height={selectedPart.height} fill="#e65a19" stroke="black"
            onClick={() => {
                if(store.utilStore.sevst.selvedgeMode === true){
                    selectedPart.selvedge.switchRight()
                }
        }}></Rect>)
        }
        if(selectedPart.selvedge.top === false && store.utilStore.sevst.selvedgeMode === true){
            sel.push(<Rect y = {-selectedPart.deepness - 5} width={selectedPart.width} height={selectedPart.deepness} fill="#92ff2b" stroke="black" opacity={0.5} onMouseOver={(e)=>{e.target.opacity(1)}} onMouseOut={(e) => {e.target.opacity(0.5)}} onClick={(e) => {selectedPart.selvedge.switchTop()}}></Rect>)
        }
        if(selectedPart.selvedge.bottom === false && store.utilStore.sevst.selvedgeMode === true){
            sel.push(<Rect y = {selectedPart.height + 5 } width={selectedPart.width} height={selectedPart.deepness } fill="#92ff2b" stroke="black" opacity={0.5} onMouseOver={(e)=>{e.target.opacity(1)}} onMouseOut={(e) => {e.target.opacity(0.5)}} onClick={(e) => {selectedPart.selvedge.switchBottom()}}></Rect>)
        }
        if(selectedPart.selvedge.left === false && store.utilStore.sevst.selvedgeMode === true){
            sel.push(<Rect x = {-selectedPart.deepness- 5} width={selectedPart.deepness} height={selectedPart.height} fill="#92ff2b" stroke="black" opacity={0.5} onMouseOver={(e)=>{e.target.opacity(1)}} onMouseOut={(e) => {e.target.opacity(0.5)}} onClick={(e) => {selectedPart.selvedge.switchLeft()}}></Rect>)
        }
        if(selectedPart.selvedge.right === false && store.utilStore.sevst.selvedgeMode === true){
            sel.push(<Rect x = {selectedPart.width + 5} width={selectedPart.deepness} height={selectedPart.height} fill="#92ff2b" stroke="black" opacity={0.5} onMouseOver={(e)=>{e.target.opacity(1)}} onMouseOut={(e) => {e.target.opacity(0.5)}} onClick={(e) => {selectedPart.selvedge.switchRight()}}></Rect>)
        }
        return sel
    }
    
    const drills = () => {
        var drl = []   
        for (const child of selectedPart.opStore.getDrills()) {
            drl.push(<DrillOperation x={child.x} y={child.y} radius={child.radius} partZ={selectedPart.deepness} deep={child.depth} index={selectedPart.opStore.getDrills().indexOf(child) + 1}></DrillOperation>);      
        }    
        return drl
    }

    const corners = () => {
        var ct = []
        for(const child of selectedPart.opStore.corners.getListCorners()){
            if(isCutOp(child)){
                ct.push(<CutOperation x={child.x} y={child.y} corner={child.corner} partwidth={selectedPart.width} partheight={selectedPart.height}></CutOperation>);
            } else if(isRadiusOp(child)) {
                ct.push(<RadiusOperation radius={child.r} corner={child.side} partwidth={selectedPart.width} partheight={selectedPart.height}></RadiusOperation>);      
            } else if(isCornerCutOp(child)) {
                ct.push(<CornerCutOperation width={child.width} height={child.height} corner={child.corner} partwidth = {selectedPart.width} partheight = {selectedPart.height}></CornerCutOperation>);      
            }

        }
        return ct
    }
    
    const cutFaces = () => {
        var ctf = []   
        for (const child of selectedPart.getList()) {
            if(isCutFace(child)) {
                ctf.push(<CutFaceOperation angle={child.angle} side={child.side} partwidth={selectedPart.width} partheight={selectedPart.height} partdepth={selectedPart.deepness}></CutFaceOperation>);      
            }
        }    
        return ctf
    }
    
    
    const grooves = () => {
        var gr = []   
        for (const child of selectedPart.getList()) {
            if(isGroove(child)) {
                gr.push(<GrooveOperation x={child.x} y={child.y} x2 = {child.x2} y2 = {child.y2} depth={child.depth} width={child.width}></GrooveOperation>);      
            }
        }    
        return gr
    }

    const sidegrooves = () => {
        var sgr = []   
        for (const child of selectedPart.getList()) {
            if(isSideGroove(child)) {
                sgr.push(<SideGrooveOperation x={child.x} y={child.y} x2 = {child.x2} y2 = {child.y2} depth={child.depth} width={child.width} side={child.side} partwidth = {selectedPart.width} partheight={selectedPart.height}></SideGrooveOperation>);      
            }
        }    
        return sgr
    }

    const pcuts = () => {
        var pct = []   
        for (const child of selectedPart.getList()) {
            if(isPCut(child)) {
                pct.push(<PCutOperation xgap={child.xgap} width={child.width} height={child.height} side={child.side} partwidth = {selectedPart.width} partheight = {selectedPart.height}></PCutOperation>);      
            }
        }    
        return pct
    }


    const xnc = <Layer x={100} y={100} width={1000} height={500}><Rect y = {-selectedPart.deepness - 5} width={selectedPart.width} height={selectedPart.deepness} fill="orange" stroke="black"></Rect>
    <Rect y = {selectedPart.height + 5 } width={selectedPart.width} height={selectedPart.deepness} fill="orange" stroke="black"></Rect>
    <Rect x = {-selectedPart.deepness- 5} width={selectedPart.deepness} height={selectedPart.height} fill="orange" stroke="black"></Rect>
    <Rect x = {selectedPart.width + 5} width={selectedPart.deepness} height={selectedPart.height} fill="orange" stroke="black"></Rect>
    <Rect width={selectedPart.width} height={selectedPart.height} fill="orange" stroke="black"></Rect>{selvedges()}{drills()}{corners()}{cutFaces()}{grooves()}{sidegrooves()}{pcuts()}</Layer>//32
    return(
        <Stage width={1000} height={500} className="workspace">
            {xnc}
        </Stage>
    )
})