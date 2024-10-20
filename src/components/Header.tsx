import React from "react";
import { BoxHeader, Container } from "../styles/styledComponents";
import LogoComponent from "./LogoComponent";
import Navbar from "./Navbar";
import IconsBar from "./IconsBar";
import "../styles/styles.css"

export default function Header() {

    return (
        <Container className="w-100 shadow" style={{position: "fixed", height: 70, backgroundColor: "white", zIndex: 10}}>
            <BoxHeader style={{height: 70}}>
                <LogoComponent />
                <Navbar />
                <IconsBar />
            </BoxHeader>
        </Container>
    )
}