import React, { useState } from "react"
import { observer } from "mobx-react"
import { AgGridReact } from 'ag-grid-react';
import { useStore } from "../stores/StoreContext";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const TableOfOperations = observer(() => {
    const store = useStore()
    var selectedPart = store.parts.find(i => i.getPartId() === store.utilStore.getSelectedPart())!

    const [rowData] = useState([
        {ID: "239846376", Name: "Отвір", X: 30},
    ]);
    
    const [columnDefs] = useState([
        { field: 'ID' },
        { field: 'Name' },
        { field: 'Side' },
        { field: 'X' },
        { field: 'Y' },
        { field: 'Depth' },
        { field: 'Angle' },
        { field: 'Misc' }
    ])
    
    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600, marginLeft: 120}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
    )
})