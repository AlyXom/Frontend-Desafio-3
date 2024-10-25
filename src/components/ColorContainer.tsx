import React, { useState } from "react";
import { ColorButton } from "../styles/styledComponents";

const colors = ["#816DFA", "#000000", "#B88E2F"]

export default function ColorContainer() {
    const [selected, setSelected] = useState<number | undefined>(undefined)
    return (
        <div style={{marginTop: 20}}>
            <p style={{color: "#9F9F9F"}}>Size</p>
            <span className="flex gap" style={{marginTop: 10}}>
                {colors.map((item, index) => <ColorButton onClick={() => setSelected(index)} $index={index} $selected={selected} $color={item}></ColorButton>)}
            </span>
        </div>
    )
}