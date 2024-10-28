import React from "react";
import { Container } from "../../styles/styledComponents";
import { Product } from "../../types/product";
import "../../styles/styles.css"
import VerticalCard from "../modal/VerticalCard";

export default function OurProducts({products}: {products: Product[]}) {
    return (
        <Container className="gap wrap" style={{overflow: "hidden", width: "85%", justifyContent: "space-evenly", height: 800}}>
            {products.filter((item) => item.discount_percent > 0 ? item : undefined).map((item) => {
                return (
                    <VerticalCard key={item.id} item={item}/>
                )
            })}
        </Container>
    )
}