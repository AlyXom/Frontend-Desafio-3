import React from "react";
import { Container } from "../styles/styledComponents";
import Filter from "./Filter";
import ProductsList from "./ProductsList";

export default function MainContentShop() {
    return (
        <div>
            <Filter />
            <ProductsList />
        </div>
    )
}