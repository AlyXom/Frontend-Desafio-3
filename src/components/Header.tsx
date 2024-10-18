import React from "react";
import { BoxHeader, Container } from "../styles/styledComponents";
import LogoComponent from "./LogoComponent";
import Navbar from "./Navbar";
import IconsBar from "./IconsBar";

export default function Header() {

    return (
        <Container style={{position: "fixed", width: "100%", height: 70, backgroundColor: "white", zIndex: 10}}>
            <BoxHeader style={{height: 70}}>
                <LogoComponent />
                <Navbar />
                <IconsBar />
            </BoxHeader>
        </Container>
    )
}