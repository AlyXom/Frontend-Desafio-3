import React, { useEffect, useState } from "react";
import { ColorButton } from "../styles/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { add } from "../redux/slices/temporaryCart";

const colors = ["#816DFA", "#000000", "#B88E2F"]

export default function ColorContainer() {
    const [selected, setSelected] = useState<number | undefined>(undefined)
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.temporaryCart)
    useEffect(() => {
        if(selected !== undefined) {
            const color = colors[selected]
            dispatch(add({...state, color: color}))
        }
    }, [selected])
    return (
        <div style={{marginTop: 20}}>
            <p style={{color: "#9F9F9F"}}>Color</p>
            <span className="flex gap" style={{marginTop: 10}}>
                {colors.map((item, index) => <ColorButton key={index} onClick={() => setSelected(index)} $index={index} $selected={selected} $color={item}></ColorButton>)}
            </span>
        </div>
    )
}