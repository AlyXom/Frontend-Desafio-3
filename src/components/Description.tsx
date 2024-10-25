import React, { useState } from "react";
import { Container, DescriptionTitle, Text } from "../styles/styledComponents";
import { Product } from "../types/product";
import "../styles/styles.css"

export default function Description({product}: {product: Product}) {
    const [selected, setSelected] = useState<number>(1)
    return (
        <Container style={{marginTop: 40, flexDirection: "column", alignItems: "center"}}>
            <div className="flex" style={{gap: 40, marginBottom: 40}}>
                <DescriptionTitle onClick={() => setSelected(1)} $selected={selected == 1}>Description</DescriptionTitle>
                <DescriptionTitle onClick={() => setSelected(2)} $selected={selected == 2}>Additional Information</DescriptionTitle>
            </div>
            <Container style={{width: "80%"}}>
                <div style={{display: selected == 1 ? "block" : "none"}}>
                    <p>{product.large_description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus voluptas explicabo, fugiat illum aperiam saepe dignissimos, officia atque repudiandae laborum sed, esse culpa. Inventore architecto enim ipsam similique repellat!</p>
                </div>
                <div style={{display: selected == 2 ? "block" : "none"}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus voluptas explicabo, fugiat illum aperiam saepe dignissimos, officia atque repudiandae laborum sed, esse culpa. Inventore architecto enim ipsam similique repellat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere dolor iste amet unde iusto at harum laudantium, nemo, vel dicta? Odit quos pariatur voluptatum ea perspiciatis quo fugit explicabo.</p>
                </div>
            </Container>
        </Container>
    )
}