import React from "react"
import { useStore } from "../stores/StoreContext";
import { Store } from "../stores/Store";

export const handleSelectTexture = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('element clicked');
};

export const handleSelectSize = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('element clicked2');
};

export function handleAddPart (store: Store) { 
    store.addPart(300,200,18)
    
    console.log(store.utilStore.modalsel.getModalSelect())
    
}

export const handleEditPart = (store: Store) => {
    store.utilStore.modalsel.setModalSelectTrue()
};

export const setId = (store: Store, id:string) => {
    store.utilStore.selectedpart = id
    store.utilStore.modalsel.setModalSelectFalse()
    console.log(store.utilStore.selectedpart)
    store.utilStore.setMainMenuFalse()
    store.utilStore.setOperationMenuTrue()
};