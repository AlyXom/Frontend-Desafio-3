import React from "react";
import { Container } from "../styles/styledComponents";
import { Product } from "../types/product";
import "../styles/styles.css"
import VerticalCard from "./VerticalCard";

export default function OurProducts({products}: {products: Product[]}) {
    return (
        <Container className="gap wrap" style={{height: 780, overflow: "hidden", width: "85%"}}>
                    {products.filter((item) => item.discount_percent > 0 ? item : undefined).map((item) => {
                        return (
                            <VerticalCard item={item}/>
                        )
                    })}
                </Container>
    )
}