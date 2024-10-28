import React, { useEffect, useState } from "react";
import ProductNavigation from "./ProductNavigation";
import { useParams } from "react-router-dom";
import { myApi } from "../axios.config";
import { Product } from "../types/product";
import ProductInfos from "./ProductInfos";
import Description from "./Description";
import RelatedProducts from "./RelatedProducts";

export default function MainContentSingleProduct() {
    const { id } = useParams()
    const [data, setData] = useState<Product>()
    const [smallImg, setSmallImg] = useState([])
    useEffect(() => {
        async function getProduct() {
            const response = await myApi.get(`products/${Number(id)}`)
            if(response) {
                setData(response.data)
            }
        }

        getProduct()
    }, [id])

    useEffect(() => {
        if(data) {
            const images = JSON.parse(data.other_images_link)
            setSmallImg(images)
        }
    }, [data])

    return (
        <div>
            {data && (
                <div>
                    <ProductNavigation product={data}/>
                    <ProductInfos product={data} smallImg={smallImg}/>
                    <hr style={{marginTop: 60}}/>
                    <Description product={data}/>
                    <RelatedProducts product={data}/>
                </div>
            )}
            
        </div>
    )
}