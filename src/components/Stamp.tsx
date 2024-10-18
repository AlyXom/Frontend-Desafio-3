import React from "react"
import { StampContainer } from "../styles/styledComponents"

export default function Stamp({isNew, discount, color}: {isNew?: boolean, discount?: number, color?: string}) {
    return (
        <StampContainer $color={color}>
            {isNew ? <p>New</p> : undefined}
            {discount ? <p>{`-${discount}%`}</p> : undefined}
        </StampContainer>
    )
}