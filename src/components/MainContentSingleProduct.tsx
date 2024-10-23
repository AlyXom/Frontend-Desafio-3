import React, { useEffect, useState } from "react";
import ProductNavigation from "./ProductNavigation";
import { useParams } from "react-router-dom";
import { myApi } from "../axios.config";
import { Product } from "../types/product";

export default function MainContentSingleProduct() {
    const { id } = useParams()
    const [data, setData] = useState<Product>()
    useEffect(() => {
        async function getProduct() {
            const response = await myApi.get(`products/${Number(id)}`)

            if(response) {
                setData(response.data)
            }
        }

        getProduct()
    }, [])
    return (
        <div>
            {data ? <ProductNavigation product={data}/> : undefined}
        </div>
    )
}