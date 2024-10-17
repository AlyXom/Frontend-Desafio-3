import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, deleteToHeart } from "../redux/slices/heartAndCart.slice";
import { RootState } from "../redux/store";
import { myApi } from "../axios.config";
import { Product } from "../types/product";

export default function Home() {
    const [product, setProduct] = useState<Product>()
    const dispatch = useDispatch()

    useEffect(() => {
        async function getItem() {
            const response = await myApi.get("/products/5")
            if(response) {
                setProduct(response.data)
            }
        }

        getItem()
    }, [])

    return (
        <div>
            <Header />
            <div style={{backgroundColor: "lightgrey", width: "100%", height: 400}}>
                {product ? <button onClick={() => dispatch(addToHeart(product))}>Likes</button> : <div></div>}
                <button onClick={() => console.log("Bom dia")}>Cart</button>
            </div>
        </div>
    )
}