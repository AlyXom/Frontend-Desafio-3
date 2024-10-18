import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../../types/modalState";

const initialState: ModalState = {
    cart: false,
    heart: false
}

export const modalstate = createSlice({
    name: "modal",
    initialState,
    reducers: {
        switchState: (state, action: PayloadAction<ModalState>) => {
            return state = action.payload
        }
    }
})

export const { switchState } = modalstate.actions

export default modalstate.reducer