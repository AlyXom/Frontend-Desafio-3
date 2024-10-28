import React from "react";
import { svgPath } from "../IconsBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addToHeart, deleteToHeart } from "../../redux/slices/heartAndCart.slice";
import { Product } from "../../types/product";
import { ButtonText, Icons } from "../../styles/styledComponents";
import "../../styles/styles.css"

export default function OverlayOptions({product}: {product: Product}) {

    const dispatch = useDispatch()
    const state = useSelector((state:RootState) => state.heartandcart.heart)
    const exist = state?.find(item => item.id == product.id)

    return (
        <div className="flex gap" style={{marginTop: 15}}>
            <div className="flex alignCenter" style={{cursor: "pointer"}}>
                <Icons $width={17} $height={17} src={`${svgPath}/share.svg`}/>
                <ButtonText style={{color: "white", cursor: "pointer"}}>Share</ButtonText>
            </div>
            <div className="flex alignCenter" style={{cursor: "pointer"}}>
                <Icons $width={17} $height={17} src={`${svgPath}/compare.svg`}/>
                <ButtonText style={{color: "white", cursor: "pointer"}}>Compare</ButtonText>
            </div>
            <div 
            className="flex alignCenter" 
            style={{cursor: "pointer"}} 
            onClick={() => !exist ? dispatch(addToHeart(product)) : dispatch(deleteToHeart(product.id))}>

                {exist ? 
                <Icons 
                $width={18} 
                $height={18} 
                src={`${svgPath}/white-heart-fill.svg`}/> : 
                <Icons 
                $width={18} 
                $height={18} 
                src={`${svgPath}/white-heart.svg`}/>}
                
                <ButtonText style={{color: "white", cursor: "pointer"}}>Like</ButtonText>
            </div>
        </div>
    )
}