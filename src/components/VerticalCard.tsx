import React from "react";
import { Product } from "../types/product";
import Stamp from "./Stamp";
import OverlayCard from "./OverlayCard";
import { Text } from "../styles/styledComponents";
import "../styles/styles.css"

export default function VerticalCard({item}: {item: Product}) {
    return (
        <div className="flex flexDColumn alignCenter" style={{position: "relative"}}>

            <div className="flex gap" style={{position: "absolute", right: 10, top: 10}}>
                {item.is_new ? <Stamp isNew={item.is_new} color="#2EC1AC"/> : undefined}
                {item.discount_percent > 0 ? <Stamp discount={item.discount_percent}/> : undefined}
            </div>

            <OverlayCard product={item}/>

            <div className="w-100" style={{height: 300}}>
                <img className="w-100 h-100" src={`http://${item.image_link}`} alt="" />
            </div>

            <div style={{width: "96%"}}>

                <Text className="font-20" style={{color: "#3A3A3A"}}>{item.name}</Text>
                <Text className="wg-500" style={{color: "#898989"}}>{item.description}</Text>

                <div className="flex" style={{gap: 30}}>
                    <Text style={{color: "#3A3A3A", fontSize: 20, fontWeight: 600}}>{`R$${item.price}`}</Text>
                    {/* {item.discount_price > 0 ? <Text>{`R$${item.discount_price}`}</Text> : undefined} */}
                    <Text style={{textDecorationLine: "line-through", color: "#B0B0B0"}}>R$ 500</Text>
                </div>
                
            </div>
        </div>
    )
}