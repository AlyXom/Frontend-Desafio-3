import React, { useState, useEffect } from "react";
import { BoxHeader, Container, HeaderIcons, Text, Title } from "../styles/styledComponents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Product } from "../types/product";
const logo = require("../assets/logo.png")

const svgPath = "http://localhost:3000/icons"

export default function Header() {

    const [product, setProduct] = useState<Product>()
    const {heart, cart} = useSelector((state: RootState) => state.heartandcart)
    const navigate = useNavigate()

    console.log(heart)
    return (
        <Container>
            <BoxHeader style={{height: 70}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={logo} alt="logo"/>
                    <Title>Furniro</Title>
                </div>
                <div style={{display: "flex", width: "25%", justifyContent: "space-between"}}>
                    <Text onClick={() => navigate("/")}>Home</Text>
                    <Text onClick={() => navigate("/shop")}>Shop</Text>
                    <Text onClick={() => navigate("/about")}>About</Text>
                    <Text onClick={() => navigate("/contact")}>Contact</Text>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", width: "10%"}}>
                    <HeaderIcons src={`${svgPath}/user.svg`} alt="" />
                    <div>
                        <HeaderIcons src={`${svgPath}/search.svg`} alt="" />
                    </div>
                    <div style={{display: "flex", gap: 5}}>
                        <HeaderIcons src={`${svgPath}/heart.svg`} alt="" />
                        <p style={{fontSize: 13, cursor: "default"}}>{heart?.length}</p>
                    </div>
                    <div style={{display: "flex", gap: 5}}>
                        <HeaderIcons src={`${svgPath}/cart.svg`} alt="" />
                        <p style={{fontSize: 13, cursor: "default"}}>{cart?.length}</p>
                    </div>
                </div>
            </BoxHeader>
        </Container>
    )
}