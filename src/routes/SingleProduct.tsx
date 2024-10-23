import React from "react";
import Header from "../components/Header";
import MainContentSingleProduct from "../components/MainContentSingleProduct";

export default function SingleProduct() {
    return (
        <div>
            <Header />
            <div style={{paddingTop: 67}}></div>
            <MainContentSingleProduct />
        </div>
    )
}