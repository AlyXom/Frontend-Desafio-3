import React from "react";
import { Title } from "../styles/styledComponents";
const logo = require("../assets/logo.png")


export default function LogoComponent() {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <img src={logo} alt="logo"/>
            <Title>Furniro</Title>
        </div>
    )
}