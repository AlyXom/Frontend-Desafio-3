import React from "react";
import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const param = useParams()

    console.log(param)
    return (
        <div>
            <h1>{`Single Product: ${param.id}`}</h1>
        </div>
    )
}