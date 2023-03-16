import * as op from "../logic_stuff/OperationObjects"

export const isCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut): op is op.Cut => op.type === "cut";
export const isDrill = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut): op is op.Drill => op.type === "drill";
export const isCutFace = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut): op is op.СutFace => op.type === "cutface";
export const isRadius = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut): op is op.Radius => op.type === "radius";
export const isGroove = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut): op is op.Groove => op.type === "groove";
export const isSideGroove = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut): op is op.SideGroove => op.type === "sidegroove";
export const isPCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace|op.Groove|op.SideGroove|op.PCut): op is op.PCut => op.type === "pcut";