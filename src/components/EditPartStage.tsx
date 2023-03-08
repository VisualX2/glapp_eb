import { Provider, observer } from "mobx-react"
import { useStore } from "../stores/StoreContext"
import { Circle, Layer, Rect, Stage } from "react-konva"
import { PartStore } from "../stores/PartStore"
import "../styles/EditPartStage.css"
import * as op from "../logic_stuff/OperationObjects"
import { DrillOperation } from "./XNCOperationComponents/DrillOperation"
import { CutOperation } from "./XNCOperationComponents/CutOperation"
import { CutFaceOperation } from "./XNCOperationComponents/CutFaceOperation"


export const EditPartStage = observer(() => {
    const store = useStore()
    var selectedPart = store.parts.find(i => i.getPartId() === store.utilStore.getSelectedPart())!
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
    const isDrill = (op: op.Drill|op.Cut|op.Radius|op.СutFace): op is op.Drill => op.type === "drill";
    const drills = () => {
        var drl = []   
        for (const child of selectedPart.getList()) {
            if(isDrill(child) && child.x !== undefined && child.y !== undefined && child.depth !== undefined) {
                drl.push(<DrillOperation x={child.x} y={child.y} radius={child.radius} partZ={selectedPart.deepness} deep={child.depth}></DrillOperation>);      
            }
        }    
        return drl
    }
    const isCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace): op is op.Cut => op.type === "cut";
    const cuts = () => {
        var ct = []   
        for (const child of selectedPart.getList()) {
            if(isCut(child) && child.x !== undefined && child.y !== undefined) {
                ct.push(<CutOperation x={child.x} y={child.y} corner={child.corner} partwidth={selectedPart.width} partheight={selectedPart.height}></CutOperation>);      
                console.log("ty lokh")
            }
        }    
        return ct
    }
    const isCutFace = (op: op.Drill|op.Cut|op.Radius|op.СutFace): op is op.СutFace => op.type === "cutface";
    const cutFaces = () => {
        var ctf = []   
        for (const child of selectedPart.getList()) {
            if(isCutFace(child)) {
                ctf.push(<CutFaceOperation angle={child.angle} side={child.side} partwidth={selectedPart.width} partheight={selectedPart.height} partdepth={selectedPart.deepness}></CutFaceOperation>);      
            }
        }    
        return ctf
    }
    const xnc = <Layer x={100} y={100} width={1000} height={500}><Rect y = {-selectedPart.deepness - 5} width={selectedPart.width} height={selectedPart.deepness} fill="orange" stroke="black"></Rect>
    <Rect y = {selectedPart.height + 5 } width={selectedPart.width} height={selectedPart.deepness} fill="orange" stroke="black"></Rect>
    <Rect x = {-selectedPart.deepness- 5} width={selectedPart.deepness} height={selectedPart.height} fill="orange" stroke="black"></Rect>
    <Rect x = {selectedPart.width + 5} width={selectedPart.deepness} height={selectedPart.height} fill="orange" stroke="black"></Rect>
    <Rect width={selectedPart.width} height={selectedPart.height} fill="orange" stroke="black"></Rect>{selvedges()}{drills()}{cuts()}{cutFaces()}</Layer>//32
    return(
        <Stage width={1000} height={500} className="workspace">
            {xnc}
        </Stage>
    )
})