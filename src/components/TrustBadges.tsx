import React from "react";
import Badges from "./Badges";
import "../styles/styles.css"
import { Container } from "../styles/styledComponents";

export default function TrustBadges() {
    return (
        <Container style={{backgroundColor: "#FAF3EA", height: 250}}>
            <div className="w-90 flex alignCenter justifyAround">
                <Badges icon="trophy" title="High Quality" msg="Crafted from top materials"/>
                <Badges icon="protection" title="Warranty Protection" msg="Over 2 years"/>
                <Badges icon="shipping" title="Free Shipping" msg="Order over 150 $"/>
                <Badges icon="support" title="24 / 7 Support" msg="Dedicated support"/>
            </div>
        </Container>
    )
}