import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filtered } from "../../types/filteredProduct";

const initialState: Filtered = {
    is_new: undefined,
    limit: 16,
    total: 26
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        updateSearch: (state, action:PayloadAction<Filtered>) => {
            return state = action.payload
        },

        showing: (state, action: PayloadAction<number>) => {
            state.showing = action.payload
            return state
        },

        totalPageIs: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload
            return state
        }
    }
})


export const { updateSearch, showing, totalPageIs } = filterSlice.actions

export default filterSlice.reducer