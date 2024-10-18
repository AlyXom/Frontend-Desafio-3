import React, { useState } from "react";
import { svgPath } from "./IconsBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToHeart, deleteToCart, deleteToHeart } from "../redux/slices/heartAndCart.slice";
import { Product } from "../types/product";
import { Icons, Text } from "../styles/styledComponents";

interface product {
    product: Product
}

export default function OverlayOptions({product}: product) {
    const dispatch = useDispatch()
    const state = useSelector((state:RootState) => state.heartandcart.heart)
    const exist = state?.find(item => item.id == product.id)
    return (
        <div style={{display: "flex"}}>
            <div style={{cursor: "pointer", display: "flex", gap: 10}}>
                <Icons  src={`${svgPath}/share.svg`}/>
                <Text style={{color: "white"}}>Share</Text>
            </div>
            <div style={{cursor: "pointer", display: "flex", gap: 10}}>
                <Icons src={`${svgPath}/compare.svg`}/>
                <Text style={{color: "white"}}>Compare</Text>
            </div>
            <div style={{cursor: "pointer", display: "flex", gap: 10}} onClick={() => !exist ? dispatch(addToHeart(product)) : dispatch(deleteToHeart(product.id))}>
                {exist ? <Icons src={`${svgPath}/white-heart-fill.svg`}/> : <Icons src={`${svgPath}/white-heart.svg`}/>}
                <Text style={{color: "white"}}>Like</Text>
            </div>
        </div>
    )
}