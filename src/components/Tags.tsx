import React, { useEffect, useState } from "react";
import "../styles/styles.css"
import "../styles/tags.css"
import { Product } from "../types/product";
import { Category } from "../types/category";
import { myApi } from "../axios.config";
import { Icons } from "../styles/styledComponents";
import { svgPath } from "./IconsBar";

export default function Tags({product}: {product: Product}) {
    const [category, setCategory] = useState<Category>()
    useEffect(() => {
        async function getCategory() {
            const response = await myApi.get("categories/")
            if(response) {
                const data = response.data.find((item:Category) => item.id == product.category_id)
                setCategory(data)
            }
        }
        getCategory()
    }, [])

    return (
        <div className="flex gap flexDColumn" style={{marginTop: 30}}>
            <div className="flex gap">
                <div className="flex justifyBetween container" style={{width: 100}}>
                    <p className="color">SKU</p>
                    <span className="color">:</span>
                </div>
                <p className="color">{product.sku}</p>
            </div>
            <div className="flex gap">
                <div className="flex justifyBetween container" style={{width: 100}}>
                    <p className="color">Category</p>
                    <span className="color">:</span>
                </div>
                <p className="color">{category?.name}</p>
            </div>
            <div className="flex gap">
                <div className="flex justifyBetween container" style={{width: 100}}>
                    <p className="color">Tags</p>
                    <span className="color">:</span>
                </div>
                <p className="color">Forniture</p>
            </div>
            <div className="flex gap">
                <div className="flex justifyBetween container">
                    <p className="color">Share</p>
                    <span className="color">:</span>
                </div>
                <div className="flex" style={{gap: 20}}>
                    <Icons src={`${svgPath}/facebook.svg`}/>
                    <Icons src={`${svgPath}/twitter.svg`}/>
                    <Icons src={`${svgPath}/linkedin.svg`}/>
                </div>
            </div>
        </div>
    )
}