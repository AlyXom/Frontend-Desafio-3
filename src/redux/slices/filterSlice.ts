import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter } from "../../types/filter";

const initialState: Filter = {}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        updateSearch: (state, action:PayloadAction<Filter>) => {
            state = action.payload
        }
    }
})


export const { updateSearch } = filterSlice.actions

export default filterSlice.reducer