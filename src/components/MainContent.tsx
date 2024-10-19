import React, { useEffect, useState } from "react";
import { Container, LargeText, ShowMoreButton} from "../styles/styledComponents";
import { myApi } from "../axios.config";
import { Category } from "../types/category";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";
import BrowseTheRange from "./BrowseTheRange";
import OurProducts from "./OurProducts";


export default function MainContent() {

    const [categories, setCategories] = useState<Category[]>([])
    const [productDiscount, setProductDiscount] = useState<Product[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getCategories() {
            const response = await myApi.get("/categories")
            if(response) {
                setCategories(response.data)
            }
        }

        async function getDiscountProduct() {
            const response = await myApi.get("products/?limit=16")
            if(response) {
                setProductDiscount(response.data.products)
            }
        }

        getDiscountProduct()
        getCategories()
    }, [])

    return (
        <Container>
            <Container style={{width: "90%", marginTop: "5%", flexDirection: "column", alignItems: "center"}}>
                <LargeText>Browse The Range</LargeText>
                <BrowseTheRange categories={categories}/>
                <LargeText style={{marginBottom: "5%"}}>Our Products</LargeText>
                <OurProducts products={productDiscount}/>
                <ShowMoreButton onClick={() => navigate("shop/")}>Show More</ShowMoreButton>
            </Container>
        </Container>
    )
}