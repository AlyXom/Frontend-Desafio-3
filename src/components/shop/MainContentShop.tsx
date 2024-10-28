import React from "react";
import Filter from "./Filter";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import { Container } from "../../styles/styledComponents";

export default function MainContentShop() {
    return (
        <div>
            <Filter />
            <ProductsList />
            <Pagination />
        </div>
    )
}