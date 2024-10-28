import React, { useState } from "react";
import { ProductImage, ProductThumb } from "../../styles/styledComponents";
import { Product } from "../../types/product";

export default function ProductImageContainer({product ,smallImg = []}: {product: Product ,smallImg: string[]}) {
    const [selected, setSelected] = useState<number>(0)
    return (
        <div className="flex gap">
            <div className="flex gap" style={{flexDirection: "column"}}>
                {smallImg ? smallImg.map((item, index) => <ProductThumb $index={index} $selected={selected} key={index} onClick={() => setSelected(index)} src={item}/>) : undefined}
            </div>
            <div className="flex" style={{height: 500, width: 450, alignItems: "center"}}>
                {smallImg ? <ProductImage src={smallImg[selected]}/> : <ProductImage src={product.image_link} alt="" />}
            </div>
        </div>
    )
}