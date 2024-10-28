import React from "react";
import { Container } from "../styles/styledComponents";
import FilterCategory from "./FilterCategory";
import SortBy from "./ShortBy";

export default function Filter() {
    return (
        <Container className="alignCenter" style={{height: 100, backgroundColor: "#F9F1E7"}}>
            <div className="flex alignCenter" style={{width: "88%", height: "80%"}}>
                <FilterCategory />
                <SortBy />
            </div>
        </Container>
    )
}