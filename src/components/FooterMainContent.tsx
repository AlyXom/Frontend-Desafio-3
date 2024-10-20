import React from "react";
import { Container, NavText, Text } from "../styles/styledComponents";
import UtilityLinks from "./UtilityLinks";

export default function FooterMainContent() {
    return (
        <Container>
            <div className="w-90 mTop-40p flex" style={{gap: "15%"}}>
                <div>
                    <h1 className="font-24">Furniro.</h1>
                    <div className="h-70p mTop-50p" style={{width: 300}}>
                        <Text style={{color: "#9F9F9F"}}>400 University Drive Suite 200 Coral Gables,<br/> FL 33134 USA</Text>
                    </div>
                </div>
                <UtilityLinks />
            </div>
        </Container>
    )
}