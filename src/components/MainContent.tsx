import React, { useEffect, useState } from "react";
import { CategoryCard, Container, LargeText, SeeMoreButton, Text, VerticalCard } from "../styles/styledComponents";
import { myApi } from "../axios.config";
import { Category } from "../types/category";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";
import Stamp from "./Stamp";
import OverlayCard from "./OverlayCard";


export default function MainContent() {

    const [data, setData] = useState<Category[]>([])
    const [productDiscount, setProductDiscount] = useState<Product[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getCategories() {
            const response = await myApi.get("/categories")
            if(response) {
                setData(response.data)
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

                <Container style={{marginTop: "5%", gap: 20, marginBottom: "5%"}}>
                    {data.filter((item) => item.id > 3).map((item) => {
                        return (
                            <CategoryCard onClick={() => navigate(`shop/?category=${item.id}`)} key={item.id}>
                                <div style={{width: "100%", height: "100%"}}>
                                    <img style={{width: "100%", height: "100%", borderRadius: 10}} src={`http://${item.image_link}`} alt="" />
                                </div>
                                <Text style={{fontSize: 20}}>{item.name}</Text>
                            </CategoryCard>
                        )
                    })}
                </Container>

                <LargeText style={{marginBottom: "5%"}}>Our Products</LargeText>

                <Container style={{gap: 10, flexWrap: "wrap", height: 780, overflow: "hidden", width: "85%"}}>
                    {productDiscount.filter((item) => item.discount_percent > 0 ? item : undefined).map((item) => {
                        return (
                            <VerticalCard key={item.id}>
                                <div style={{position: "relative", alignItems: "center", display: "flex", flexDirection: "column"}}>
                                    <div style={{position: "absolute", right: 10, top: 10, display: "flex", gap: 10}}>
                                        {item.is_new ? <Stamp isNew={item.is_new} color="#2EC1AC"/> : undefined}
                                        {item.discount_percent > 0 ? <Stamp discount={item.discount_percent}/> : undefined}
                                    </div>
                                    <OverlayCard product={item}/>
                                    <div style={{width: "100%", height: 300}}>
                                        <img style={{width: "100%", height: "100%"}} src={`http://${item.image_link}`} alt="" />
                                    </div>
                                    <div style={{width: "96%"}}>
                                        <Text style={{fontSize: 20, color: "#3A3A3A"}}>{item.name}</Text>
                                        <Text style={{color: "#898989", fontWeight: 500}}>{item.description}</Text>
                                        <div style={{display: "flex", gap: 30}}>
                                            <Text style={{fontSize: 18, fontWeight: 600, color: "#3A3A3A"}}>{`R$${item.price}`}</Text>
                                            {/* {item.discount_price > 0 ? <Text>{`R$${item.discount_price}`}</Text> : undefined} */}
                                            <Text style={{textDecorationLine: "line-through", color: "#B0B0B0"}}>R$ 500</Text>
                                        </div>
                                    </div>
                                </div>
                            </VerticalCard>
                        )
                    })}
                </Container>
                    <SeeMoreButton onClick={() => navigate("shop/")} style={{border: "1px #B88E2F solid", marginTop: 20, marginBottom: "5%"}}>Show More</SeeMoreButton>
            </Container>
        </Container>
    )
}