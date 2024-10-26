import React, { useEffect, useState } from "react";
import { Container, ExpandedContainer, ShowMoreButton, Title } from "../styles/styledComponents";
import { Product } from "../types/product";
import { myApi } from "../axios.config";
import VerticalCard from "./VerticalCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateSearch } from "../redux/slices/filterSlice";

export default function RelatedProducts({product}: {product: Product}) {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.filterSlice)
    const navigate = useNavigate()
    const [data, setData] = useState<Product[]>([])
    const [open, setOpen] = useState<number>(1)

    useEffect(() => {
        async function getCategory() {
            const response = await myApi.get("products/", {
                params: {
                    category: product.category_id
                }
            })
            setData(response.data.products)
        }
        getCategory()

        if(open == 3) {
            dispatch(updateSearch({...state, category: product.category_id}))
            navigate(`/shop`)
            window.scrollTo(0,0)
        }
    }, [open])
    return (
        <Container className="alignCenter" style={{marginTop: 80, flexDirection: "column"}}>
            <Title style={{marginBottom: 50}}>Related Products</Title>
            <ExpandedContainer $expand={open} className="gap wrap">
                {data.map((item) => {
                    return (
                        <VerticalCard item={item}/>
                    )
                })}
            </ExpandedContainer>
            <ShowMoreButton onClick={() => {
                if(data.length >= 4) {
                    setOpen(open + 1)
                } else {
                    setOpen(3)
                }
            }}>Show More</ShowMoreButton>
        </Container>
    )
}