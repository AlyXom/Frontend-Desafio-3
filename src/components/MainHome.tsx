import React from "react";
import { Container } from "../styles/styledComponents";
import Banner from "./Banner";
import MainContent from "./MainContent";

export default function MainHome() {
    return (
        <div>
            <Banner />
            <MainContent />
        </div>
    )
}