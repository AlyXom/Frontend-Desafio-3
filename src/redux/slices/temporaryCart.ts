import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

const initialState: Product = {
    id: 0,
    category_id: 0,
    name: "",
    description: "",
    discount_percent: 0,
    discount_price: 0,
    image_link: "",
    is_new: false,
    large_description: "",
    other_images_link: "",
    price: 0,
    sku: "",
    color: "",
    quantity: 0,
    size: ""
}

export const temporaryCart = createSlice({
    name: "temporary",
    initialState,
    reducers: {
        add: (state, action) => {
            state = action.payload
            return state
        },

        clear: () => {
            return initialState
        }
    }
})


export const { add, clear } = temporaryCart.actions

export default temporaryCart.reducer