import React from "react"
import "../styles/ParameterButton.css"
import { observer } from "mobx-react";

type ButtonParameters = {
    func: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    name: string;
}

export const ParameterButton: React.FC<ButtonParameters> = observer(({func, name}): React.ReactElement => {
    return(
        <div className="ParameterButton" onClick={func}>
            {name}
        </div>
    )
})
