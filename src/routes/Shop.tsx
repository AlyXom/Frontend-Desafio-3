import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

export default function Shop() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const paramCategory = queryParams.get("category")
    console.log(paramCategory)
    return (
        <div>
            <Header />
            <h1>Shop</h1>
        </div>
    )
}