import React from "react";
import { Product } from "../../types/product";
import { Text } from "../../styles/styledComponents";

export default function ProductPriceInfo({product}: {product: Product}) {
    return (
        <div className="flex gap alignCenter">
            {product.discount_percent > 0 ? 
            <Text style={{fontSize: 24, color: "#9F9F9F"}}>R${product.discount_price}</Text> : 
            <Text style={{fontSize: 24, color: "#9F9F9F"}}>R${product.price}</Text>}

            {product.discount_percent > 0 ? 
            <Text style={{textDecoration: "line-through", color: "red", fontSize: 14}}>R${product.price}</Text> : undefined}
        </div>
    )
}