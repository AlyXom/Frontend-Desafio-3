import React from "react";
import { BoxHeader, Container } from "../styles/styledComponents";
import LogoComponent from "./LogoComponent";
import Navbar from "./Navbar";
import IconsBar from "./IconsBar";

export default function Header() {

    return (
        <Container>
            <BoxHeader style={{height: 70}}>
                <LogoComponent />
                <Navbar />
                <IconsBar />
            </BoxHeader>
        </Container>
    )
}