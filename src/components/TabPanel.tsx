import React, { useState } from "react"
import { observer } from "mobx-react"
import { Button, Icon } from "@mui/material"

const topPanelStyle = {
    display: "flex",
    height: 32,
    backgroundColor: "#4D4D4F"

}
export const TopPanel = observer(() => {

    return(
        <div style={topPanelStyle}>
            <Button sx={{minWidth: 32, height: 32}}><Icon>plus</Icon></Button>
        </div>
    )
})