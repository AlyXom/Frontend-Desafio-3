import React from "react";
import { useNavigate } from "react-router-dom";
import { NavText, Text } from "../styles/styledComponents";

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div style={{display: "flex", width: "25%", justifyContent: "space-between"}}>
            <NavText onClick={() => navigate("/")}>Home</NavText>
            <NavText onClick={() => navigate("/shop")}>Shop</NavText>
            <NavText onClick={() => navigate("/about")}>About</NavText>
            <NavText onClick={() => navigate("/contact")}>Contact</NavText>
        </div>
    )
}