import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeartAndCart } from "../../types/heartAndCart";
import { Product } from "../../types/product";

const initialState: HeartAndCart = {
    heart: [],
    cart: []
}

export const heartAndCart = createSlice({
    name: "addTo",
    initialState,
    reducers: {
        addToHeart: (state, action: PayloadAction<Product>) => {
            state.heart?.push(action.payload)
        },

        deleteToHeart: (state, action: PayloadAction<number>) => {
            state.heart?.filter((item) => item.id == action.payload)
        },
    }
})


export const { addToHeart, deleteToHeart } = heartAndCart.actions

export default heartAndCart.reducer