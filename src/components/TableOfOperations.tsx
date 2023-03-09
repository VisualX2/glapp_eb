import React, { useState } from "react"
import { observer } from "mobx-react"
import { AgGridReact } from 'ag-grid-react';
import { useStore } from "../stores/StoreContext";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as op from "../logic_stuff/OperationObjects"


export const TableOfOperations = observer(() => {
    const store = useStore()
    var selectedPart = store.parts.find(i => i.getPartId() === store.utilStore.getSelectedPart())!

    //const [rowData] = useState([
    //    {ID: "239846376", Name: "Отвір", X: 30},
    //]);
    
    const rowData = () => {
        var lt = []
        const isDrill = (op: op.Drill|op.Cut|op.Radius|op.СutFace): op is op.Drill => op.type === "drill";
        const isCut = (op: op.Drill|op.Cut|op.Radius|op.СutFace): op is op.Cut => op.type === "cut";
        for(const operation of selectedPart.getList()){
            if(isDrill(operation)){
                lt.push({ID: operation.id, Name: "Отвір", X: operation.x, Y: operation.y, Depth: operation.depth, Misc: "Діаметр = " + operation.radius*2})
            }
            else if (isCut(operation)){
                lt.push({ID: operation.id, Name: "Зріз по площині", X: operation.x, Y: operation.y, Misc: operation.corner})
            }
        }
        return lt;
    }

    const [columnDefs] = useState([
        { field: 'ID' },
        { field: 'Name' },
        { field: 'Side' },
        { field: 'X' },
        { field: 'Y' },
        { field: 'Depth' },
        { field: 'Misc' }
    ])
    
    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600, marginLeft: 120}}>
           <AgGridReact
               rowData={rowData()}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
    )
})