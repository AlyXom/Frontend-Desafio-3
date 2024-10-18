import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../styles/styledComponents";

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div style={{display: "flex", width: "25%", justifyContent: "space-between"}}>
            <Text onClick={() => navigate("/")}>Home</Text>
            <Text onClick={() => navigate("/shop")}>Shop</Text>
            <Text onClick={() => navigate("/about")}>About</Text>
            <Text onClick={() => navigate("/contact")}>Contact</Text>
        </div>
    )
}