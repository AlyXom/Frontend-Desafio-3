import React, { useEffect, useState } from "react";
import { myApi } from "../axios.config";
import { Product } from "../types/product";
import VerticalCard from "./VerticalCard";
import { Container } from "../styles/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { showing, updateSearch } from "../redux/slices/filterSlice";

export default function ProductsList() {
    const state = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        async function getData() {
            const response = await myApi.get("products/", {
                params: {
                    is_new: state.is_new,
                    limit: state.limit,
                    category: state.category,
                    discount: state.discount,
                    order: state.order
                }
            })
            setProducts(response.data.products)
        }

        getData()
    }, [state])
    dispatch(showing(products.length))
    return (
        <div className="flex justifyCenter" style={{width: "100%", marginTop: "3%"}}>
            <Container className="wrap" style={{width: "80%", gap: 30}}>
            {products.map((item) => {
                return (
                    <VerticalCard key={item.id} item={item}/>
                )
            })}
        </Container>
        </div>
    )
}