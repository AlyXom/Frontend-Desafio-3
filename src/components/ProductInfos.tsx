import React, { useState } from "react";
import { Container, ProductImage, ProductThumb, Text } from "../styles/styledComponents";
import { Product } from "../types/product";
import "../styles/styles.css"
import { svgPath } from "./IconsBar";

const values = [3, 3.5, 4, 4.5, 5]
function Stars() {
    let starsElement = []
    const [stars, setStars] = useState<number>(() => values[Math.floor(Math.random() * values.length)])
    for(let i = 1; i <= stars; i++) {
        if(stars - i == 0.5) {
            starsElement.push(<img key={i} src={`${svgPath}/half-star.svg`}/>)
        } else {
            starsElement.push(<img key={i} src={`${svgPath}/star.svg`}/>)
        }
    }

    return (
        <div style={{borderRight: "1px grey solid", minWidth: 100, maxWidth: 120}}>
            {starsElement.map(item => item)}
        </div>
    )
}

export default function ProductInfos({product, smallImg = []}: {product: Product, smallImg: string[]}) {
    
    const [selected, setSelected] = useState<number>(0)
    const [reviews, setReviews] = useState(() => Math.floor((Math.random() * 10) + 1))
    return (
        <Container>
            <Container style={{justifyContent: "flex-start", width: "90%"}}>
                <div className="flex gap">
                    <div className="flex gap" style={{flexDirection: "column"}}>
                        {smallImg ? smallImg.map((item, index) => <ProductThumb $index={index} $selected={selected} key={index} onClick={() => setSelected(index)} src={item}/>) : undefined}
                    </div>
                    <div className="flex" style={{height: 500, width: 450, alignItems: "center"}}>
                        {smallImg ? <ProductImage src={smallImg[selected]}/> : <ProductImage src={product.image_link} alt="" />}
                    </div>
                </div>
                <div style={{marginLeft: 100}}>
                    <Text style={{fontSize: 40, fontWeight: 400}}>{product.name}</Text>
                    <Text style={{fontSize: 24, color: "#9F9F9F"}}>R${product.price}</Text>
                    <div className="flex alignCenter gap" style={{marginTop: 10}}>
                        <Stars />
                        <p style={{color: "#9F9F9F"}}>{reviews} Customer Review</p>
                    </div>
                    <div style={{width: "50%", marginTop: 10}}>
                        <Text>{product.large_description}</Text>
                    </div>
                </div>
            </Container>
        </Container>
    )
}