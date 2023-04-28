import React, { useState } from "react"
import { observer } from "mobx-react"
import { Button, Icon } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import {handleAddPart} from "../logic_stuff/ButtonFunc"
import { useStore } from "../stores/StoreContext";
import { Tab } from "./Tab";

const topPanelStyle = {
    display: "flex",
    height: 32,
    backgroundColor: "#4D4D4F",
    gap: 1
}
export const TopPanel = observer(() => {
    const store = useStore()
    const handleClickAddPart = (e:any) => handleAddPart(store)
    const parts = () => {
        var pt = []
        for(const part of store.parts){
            pt.push(<Tab part = {part}></Tab>)
        }
        return pt
    }
    return(
        <div style={topPanelStyle}>
            {parts()}
            <Button sx={{minWidth: 32, height: 32, padding: 0, backgroundColor: "#E7E7E7", borderRadius: 0, }}><AddIcon sx={{ color: "#373737" }} onClick={handleClickAddPart}></AddIcon></Button>
        </div>
    )
})