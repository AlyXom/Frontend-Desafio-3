import React from "react";
import { Container, Icons, Text } from "../styles/styledComponents";
import "../styles/styles.css"
import { svgPath } from "./IconsBar";

export default function ProductNavigation() {
    return (
        <Container className="alignCenter" style={{backgroundColor: "#F9F1E7", height:70}}>
            <div className="flex w-90 gap alignCenter">
                <Text style={{color: "#9F9F9F"}}>Home</Text>
                <Icons $width={13} $height={13} src={`${svgPath}/arrow.svg`}/>
                <Text style={{color: "#9F9F9F"}}>Shop</Text>
                <Icons $width={13} $height={13} src={`${svgPath}/arrow.svg`}/>
                <span style={{borderRight: "2px #9F9F9F solid", height: 30}}></span>
                <Text></Text>
            </div>
        </Container>
    )
}