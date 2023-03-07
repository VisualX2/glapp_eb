import React from "react"
import Draggable from "react-draggable";

type SelectSizeIF = {
    child: object
}

export const SelectSize: React.FC<SelectSizeIF> = ({child}): React.ReactElement => {
    return(
        <div>
            <Draggable handle="strong">
                
                <div className="box no-cursor">
                
                <strong className="cursor"><div>Edit</div></strong>
                <div>
                    <p>X:</p>
                    <input type="text" value={0}></input>
                    <p>Y:</p>
                    <input type="text" value={0}></input>
                    <p>Radius:</p>
                    <input type="text"></input>
                    <button>Set Tool</button>
                </div>
                </div>
            </Draggable>
        </div>
    )
}