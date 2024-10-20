import React from "react";
import { BannerShopContainer, Icons, Text, Title } from "../styles/styledComponents";
import "../styles/styles.css"
import { svgPath } from "./IconsBar";
import { useNavigate } from "react-router-dom";
const banner = "http://localhost:3001/assets/banner-shop.jpeg"

export default function BannerShop() {
    const navigate = useNavigate()
    return (
        <BannerShopContainer>
            <div className="w-100 h-100" style={{opacity: 0.6, filter: "blur(4px)"}}>
                <img className="w-100 h-100" style={{objectFit: "cover"}} src={banner} alt="" />
            </div>
            <div style={{position: "absolute"}}>
                <Title style={{fontSize: 48}}>Shop</Title>
                <div className="flex justifyAround alignCenter" style={{marginTop: 10}}>
                    <Text onClick={() => navigate("/")} style={{cursor: "pointer"}}>Home</Text>
                    <Icons style={{cursor: "default"}} $width={13} $height={13} src={`${svgPath}/arrow.svg`}/>
                    <Text style={{fontWeight: "300"}}>Shop</Text>
                </div>
            </div>
        </BannerShopContainer>
    )
}