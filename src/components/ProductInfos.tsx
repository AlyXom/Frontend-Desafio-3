import React, { useEffect, useState } from "react";
import { AddToCartButton, AddToCartDiv, Container, Count, Icons, Text } from "../styles/styledComponents";
import { Product } from "../types/product";
import "../styles/styles.css"
import Stars from "./Stars";
import ProductImageContainer from "./ProductImageContainer";
import ProductPriceInfo from "./ProductPriceInfo";
import SizeContainer from "./SizeContainer";
import ColorContainer from "./ColorContainer";
import { svgPath } from "./IconsBar";
import AddToCart from "./AddToCart";
import Tags from "./Tags";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/slices/temporaryCart";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";

export default function ProductInfos({product, smallImg = []}: {product: Product, smallImg: string[]}) {

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if(product) {
            dispatch(add(product))
        }
    }, [id, product])
    console.log(id)
    
    const [reviews, setReviews] = useState(() => Math.floor((Math.random() * 10) + 1))
    return (
        <Container style={{marginTop: 40}}>
            <Container style={{justifyContent: "flex-start", width: "90%"}}>
                <ProductImageContainer product={product} smallImg={smallImg}/>
                <div style={{marginLeft: 100}}>
                    <Text style={{fontSize: 40, fontWeight: 400}}>{product.name}</Text>
                    <ProductPriceInfo product={product}/>
                    <div className="flex alignCenter gap" style={{marginTop: 10}}>
                        <Stars />
                        <p style={{color: "#9F9F9F"}}>{reviews} Customer Review</p>
                    </div>
                    <div style={{width: "50%", marginTop: 10}}>
                        <Text>{product.large_description}</Text>
                    </div>
                    <SizeContainer />
                    <ColorContainer />
                    <AddToCart />
                    <hr style={{marginTop: 50}}/>
                    <Tags product={product}/>
                </div>
            </Container>
        </Container>
    )
}