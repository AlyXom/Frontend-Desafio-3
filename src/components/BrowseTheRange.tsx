import React from "react";
import { CategoryCard, Container, Text } from "../styles/styledComponents";
import { useNavigate } from "react-router-dom";
import { Category } from "../types/category";
import "../styles/styles.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateSearch } from "../redux/slices/filterSlice";

export default function BrowseTheRange({categories}: {categories:Category[]}) {

    const state = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return (
        <Container style={{marginTop: "5%", gap: 50, marginBottom: "5%"}}>
            {categories.filter((item) => item.id > 3).map((item) => {
                return (
                    <CategoryCard 
                    key={item.id} 
                    onClick={() => {
                        navigate(`shop/`)
                        dispatch(updateSearch({...state, category: item.id}))
                    }}>

                        <div className="w-100 h-100">
                            <img style={{borderRadius: 10}} src={`http://${item.image_link}`} alt="" />
                        </div>

                        <Text style={{fontSize: 20}}>{item.name}</Text>
                    </CategoryCard>
                )
            })}
        </Container>
    )
}