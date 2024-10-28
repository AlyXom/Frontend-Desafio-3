import React from "react";
import Header from "../components/Header";
import MainContentSingleProduct from "../components/singleproduct/MainContentSingleProduct";
import FooterMainContent from "../components/FooterMainContent";
import { Text } from "../styles/styledComponents";
import "../styles/styles.css"

export default function SingleProduct() {
    return (
        <div>
            <Header />
            <div style={{paddingTop: 67}}></div>
            <MainContentSingleProduct />
            <div className="w-100 flexDColumn">
                <hr />
                <FooterMainContent />
                <hr style={{margin: "40px auto 30px auto", width: "90%"}}/>
                <Text style={{marginLeft: "5%", marginBottom: 20}}>2023 furino. All rights reverved</Text>
            </div>
        </div>
    )
}