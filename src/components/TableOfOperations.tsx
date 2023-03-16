import React, { useState } from "react"
import { observer } from "mobx-react"
import { AgGridReact } from 'ag-grid-react';
import { useStore } from "../stores/StoreContext";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as op from "../logic_stuff/OperationObjects"
import { isCut, isDrill } from "../logic_stuff/CheckOps";


export const TableOfOperations = observer(() => {
    const store = useStore()
    var selectedPart = store.parts.find(i => i.getPartId() === store.utilStore.getSelectedPart())!

    //const [rowData] = useState([
    //    {ID: "239846376", Name: "Отвір", X: 30},
    //]);
    
    const rowData = () => {
        var lt = []

        for(const operation of selectedPart.getList()){
            if(isDrill(operation)){
                lt.push({Num: selectedPart.getList().indexOf(operation) + 1, ID: operation.id, Name: "Отвір", X: operation.x, Y: operation.y, Depth: operation.depth, Misc: "Діаметр = " + operation.radius*2})
            }
            else if (isCut(operation)){
                lt.push({ID: operation.id, Name: "Зріз по площині", X: operation.x, Y: operation.y, Misc: operation.corner})
            }
        }
        return lt;
    }

    const [columnDefs] = useState([
        { field: 'Num' , width: 90},
        { field: 'ID' , width: 90},
        { field: 'Name' , width: 150},
        { field: 'Side' , width: 120},
        { field: 'X' , width: 90},
        { field: 'Y' , width: 90},
        { field: 'Depth' , width: 90},
        { field: 'Misc' }
    ])
    
    return (
        <div className="ag-theme-alpine" style={{height: 400, maxWidth: 1200, marginLeft: 120}}>
           <AgGridReact
               rowData={rowData()}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
    )
})