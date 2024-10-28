import React, { useEffect, useState } from "react";
import { AddToCartButton, AddToCartDiv, Count, Text } from "../styles/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { add } from "../redux/slices/temporaryCart";
import { addToCart } from "../redux/slices/heartAndCart.slice";
import "../styles/styles.css"

export default function AddToCart() {

    const state = useSelector((state: RootState) => state.temporaryCart)
    const cart = useSelector((state: RootState) => state.heartandcart.cart)
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        dispatch(add({...state, quantity: count}))
    }, [count])

    function addToCartButton() {
        dispatch(add({...state, quantity: count}))
        if(state.color == undefined || state.size == undefined) {
            setError(true)
        } else {
            setError(false)
            dispatch(addToCart(state))
        }
    }
    console.log(cart)
    
    return (
        <div className="flex" style={{marginTop: 25, gap: 20}}>
            <AddToCartDiv $color="#9F9F9F" $width={125}>
                <Count onClick={() => setCount(count > 1 ? count - 1 : count)}>-</Count>
                <Text>{count}</Text>
                <Count onClick={() => setCount(count < 99 ? count + 1 : count)}>+</Count>
            </AddToCartDiv>
            <div className="flex flexDColumn">
                <AddToCartButton onClick={() => addToCartButton()} $color="black" $width={200} style={{justifyContent: "center"}}>
                    <Text style={{cursor: "pointer"}}>Add To Cart</Text>
                </AddToCartButton>
                {error ? <p style={{color: "red"}}>Choose a color or size.</p> : undefined}
            </div>
            <AddToCartButton $color="black" $width={200} style={{justifyContent: "center"}}>
                <span style={{fontSize: 20, marginRight: 10}}>+</span>
                <Text style={{cursor: "pointer"}}>Compare</Text>
            </AddToCartButton>
        </div>
    )
}