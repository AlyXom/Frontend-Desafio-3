import React from "react";
import { Container } from "../styles/styledComponents";
import Filter from "./Filter";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";

export default function MainContentShop() {
    return (
        <div>
            <Filter />
            <ProductsList />
            <Pagination />
        </div>
    )
}