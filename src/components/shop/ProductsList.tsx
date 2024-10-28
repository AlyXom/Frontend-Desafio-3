import React, { useEffect, useState } from "react";
import { myApi } from "../../axios.config";
import VerticalCard from "../modal/VerticalCard";
import { Container, Text } from "../../styles/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { limit, offset, showing, totalPageIs } from "../../redux/slices/filterSlice";
import { Filtered } from "../../types/filteredProduct";

export default function ProductsList() {

    const [data, setData] = useState<Filtered>({})
    const { products = [] } = data

    const state = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()


    useEffect(() => {
        async function getData() {
            const response = await myApi.get(`products/`, {
                params: {
                    is_new: state.is_new,
                    limit: state.limit,
                    category: state.category,
                    discount: state.discount,
                    order: state.order,
                    page: state.currentPage
                }
            })
            setData(response.data)
        }

        getData()
    }, [state])

    dispatch(showing(products.length))
    
    if(data.totalPages && data.total && data.offset) {
        dispatch(limit(data.total))
        dispatch(offset(data.offset))
        dispatch(totalPageIs(data.totalPages))
    }
    
    return (
        <div className="flex justifyCenter" style={{width: "100%", marginTop: "3%", marginBottom: "3%"}}>
            <Container className="wrap" style={{width: "80%", gap: 30}}>
            {products.length <= 0 ? 
            <Text>Nenhum item encontrado</Text> : 
            products.map((item) => <VerticalCard item={item} key={item.id}/>)}
        </Container>
        </div>
    )
}