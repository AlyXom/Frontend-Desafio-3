import React from "react";
import { Overlay, OverlayContainer, SeeMoreButton } from "../../styles/styledComponents";
import { useNavigate } from "react-router-dom";
import OverlayOptions from "./OverlayOptions";
import { Product } from "../../types/product";

interface product {
    product: Product
}

export default function OverlayCard({product}: product) {
    const navigate = useNavigate()

    return (
        <OverlayContainer>
            <Overlay>

                <SeeMoreButton onClick={() => {
                    navigate(`/singleproduct/${product.id}`)
                    window.scrollTo(0,0)
                }}>See More</SeeMoreButton>
                
                <OverlayOptions product={product}/>

            </Overlay>
        </OverlayContainer>
    )
}