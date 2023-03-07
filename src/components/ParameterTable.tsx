import React from "react"
import { ParameterButton } from "./ParameterButton"
import * as ButtonFunctions from "../logic_stuff/ButtonFunc"
import "../styles/ParameterTable.css"
import { useStore } from "../stores/StoreContext";
import { Box, Drawer } from "@mui/material";
import { inject, observer } from "mobx-react";



export const ParameterTable = observer(() => { //Кнопка
    const store = useStore()
    const handleClickAddPart = (e:any) => ButtonFunctions.handleAddPart(store)
    const handleClickEditPart = (e:any) => ButtonFunctions.handleEditPart(store)
    return(
        <Drawer className="menuSliderContainer" variant="persistent" anchor="left" open = {store.utilStore.mainmenudrawerstate}>
            <ParameterButton func = {ButtonFunctions.handleSelectTexture} name = {"Обрати декор"}></ParameterButton>
            <ParameterButton func = {ButtonFunctions.handleSelectSize} name = {"Обрати розміри"}></ParameterButton>
            <ParameterButton func = {handleClickAddPart} name = {"Додати деталь"}></ParameterButton>
            <ParameterButton func = {handleClickEditPart} name = {"Редагувати деталь"}></ParameterButton> 
        </Drawer>
        
    )
})