import React, { useState } from "react";
import { AddToCartButton, AddToCartDiv, Count, Text } from "../styles/styledComponents";

export default function AddToCart() {

    const [count, setCount] = useState(1)

    return (
        <div className="flex" style={{marginTop: 25, gap: 20}}>
            <AddToCartDiv $color="#9F9F9F" $width={125}>
                <Count onClick={() => setCount(count > 1 ? count - 1 : count)}>-</Count>
                <Text>{count}</Text>
                <Count onClick={() => setCount(count < 99 ? count + 1 : count)}>+</Count>
            </AddToCartDiv>
            <AddToCartButton $color="black" $width={200} style={{justifyContent: "center"}}>
                <Text style={{cursor: "pointer"}}>Add To Cart</Text>
            </AddToCartButton>
            <AddToCartButton $color="black" $width={200} style={{justifyContent: "center"}}>
                <span style={{fontSize: 20, marginRight: 10}}>+</span>
                <Text style={{cursor: "pointer"}}>Compare</Text>
            </AddToCartButton>
        </div>
    )
}