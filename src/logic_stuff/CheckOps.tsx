import * as op from "../logic_stuff/OperationObjects"

export const isCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.Cut => op.type === "cut";
export const isDrill = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.Drill => op.type === "drill";
export const isCutFace = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.СutFace => op.type === "cutface";
export const isRadius = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.Radius => op.type === "radius";
export const isGroove = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.Groove => op.type === "groove";
export const isSideGroove = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.SideGroove => op.type === "sidegroove";
export const isPCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.PCut => op.type === "pcut";
export const isCornerCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut|op.CornerCut): op is op.CornerCut => op.type === "cornercut";


export const isCutOp = (op: op.Cut|op.Radius|op.CornerCut|undefined): op is op.Cut => (op != undefined && op.type === "cut");
export const isRadiusOp = (op: op.Cut|op.Radius|op.CornerCut|undefined): op is op.Radius => (op != undefined && op.type === "radius");
export const isCornerCutOp = (op: op.Cut|op.Radius|op.CornerCut|undefined): op is op.CornerCut => (op != undefined && op.type === "cornercut");