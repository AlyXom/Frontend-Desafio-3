import React, { useState } from "react";
import { SizeButton } from "../styles/styledComponents";

const sizes = ["L", "XL", "XS"]

export default function SizeContainer() {

    const [selected, setSelected] = useState<number | undefined>(undefined)

    return (
        <div style={{marginTop: 20}}>
            <p style={{color: "#9F9F9F"}}>Size</p>
            <span className="flex gap" style={{marginTop: 10}}>
                {sizes.map((item, index) => <SizeButton onClick={() => setSelected(index)} $index={index} $selected={selected}>{item}</SizeButton>)}
            </span>
        </div>
    )
}