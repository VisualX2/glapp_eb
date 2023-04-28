import React, { useState } from "react"
import { useStore } from "../stores/StoreContext";
import { inject, observer } from "mobx-react";
import { PartStore } from "../stores/PartStore";
import {setId} from "../logic_stuff/ButtonFunc";
import "../styles/Tab.css"


type Tab = {
    part:PartStore;
}

export const Tab: React.FC<Tab> = observer(({part}): React.ReactElement => {
    const store = useStore()
    const handleTabClick = () => setId(store,part.id)
    return(
        <div className="PartTab" onClick={handleTabClick}>{part.id}</div>
    )
})
