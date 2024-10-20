import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { myApi } from "../axios.config";
import { Product } from "../types/product";
import { Container} from "../styles/styledComponents";
import VerticalCard from "../components/VerticalCard";

export default function Shop() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const paramCategory = queryParams.get("category")
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() =>{
        async function getProducts() {
            let response;
            if(paramCategory) {
                response = await myApi.get(`/products/?category=1`, {
                    params: {
                        limit: 16
                    }

                })
                console.log("passou nesse")
                setProducts(response.data.products)
            } else {
                response = await myApi.get("/products", {
                    params: {
                        limit: 16
                    }
                })
                setProducts(response.data.products)
            }
        }

        getProducts()
    }, [paramCategory])

    console.log(products)
    return (
        <div>
            <Header />
            <Container style={{gap: 10, flexWrap: "wrap", overflow: "hidden", width: "85%"}}>
            {products.map(item => {
                return (
                    <VerticalCard item={item}/>
                )
            })}
            </Container>
        </div>
    )
}