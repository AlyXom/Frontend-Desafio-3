import React, { useEffect, useState } from "react";
import { SizeButton } from "../styles/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { add } from "../redux/slices/temporaryCart";

const sizes = ["L", "XL", "XS"]

export default function SizeContainer() {

    const [selected, setSelected] = useState<number | undefined>(undefined)
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.temporaryCart)
    useEffect(() => {
        if(selected !== undefined) {
            const size = sizes[selected]
            dispatch(add({...state, size: size}))
            setSelected(undefined)
        }
    }, [state.size])

    console.log(state)

    return (
        <div style={{marginTop: 20}}>
            <p style={{color: "#9F9F9F"}}>Size</p>
            <span className="flex gap" style={{marginTop: 10}}>
                {sizes.map((item, index) => <SizeButton onClick={() => setSelected(index)} $index={index} $selected={selected}>{item}</SizeButton>)}
            </span>
        </div>
    )
}