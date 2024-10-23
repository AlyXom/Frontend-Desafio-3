import React from "react";
import ProductNavigation from "./ProductNavigation";
import { useParams } from "react-router-dom";

export default function MainContentSingleProduct() {
    const { id } = useParams()
    return (
        <div>
            <ProductNavigation/>
        </div>
    )
}