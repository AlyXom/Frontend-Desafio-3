import React, { useEffect, useState } from "react";
import { CategoryCard, Container, LargeText, Text } from "../styles/styledComponents";
import { myApi } from "../axios.config";
import { Category } from "../types/category";
import { useNavigate } from "react-router-dom";


export default function MainContent() {

    const [data, setData] = useState<Category[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getCategories() {
            const response = await myApi.get("/categories")
            if(response) {
                setData(response.data)
            }
        }

        getCategories()
    }, [])

    return (
        <Container>
            <Container style={{width: "90%", marginTop: "5%", flexDirection: "column", alignItems: "center"}}>
                <LargeText>Browse The Range</LargeText>

                <Container style={{marginTop: "5%", gap: 20}}>
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
            </Container>
        </Container>
    )
}