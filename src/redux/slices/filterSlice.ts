import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filtered } from "../../types/filteredProduct";

const initialState: Filtered = {
    is_new: undefined,
    limit: 16,
    total: 26,
    offset: 1
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
        },
        
        limit: (state, action:PayloadAction<number>) => {
            state.total = action.payload
            return state
        },

        offset: (state, action:PayloadAction<number>) => {
            state.offset = action.payload
            return state
        },
    }
})


export const { updateSearch, showing, totalPageIs, limit, offset } = filterSlice.actions

export default filterSlice.reducer