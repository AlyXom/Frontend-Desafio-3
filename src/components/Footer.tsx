import React from "react";
import "../styles/styles.css"
import TrustBadges from "./TrustBadges";
import FooterMainContent from "./FooterMainContent";
import { Text } from "../styles/styledComponents";

export default function Footer() {
    return (
        <div className="w-100 flexDColumn">
            <TrustBadges />
            <hr />
            <FooterMainContent />
            <hr style={{margin: "40px auto 30px auto", width: "90%"}}/>
            <Text style={{marginLeft: "5%", marginBottom: 20}}>2023 furino. All rights reverved</Text>
        </div>
    )
}