import React, { useEffect, useState } from "react";
import { Input, SortDropdown, Text } from "../styles/styledComponents";
import "../styles/styles.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { myApi } from "../axios.config";
import { updateSearch } from "../redux/slices/filterSlice";
import { Filtered } from "../types/filteredProduct";

export default function SortBy() {
    const state = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()

    return (
        <div className="flex w-100" style={{marginLeft: 30}}>
            <div className="flex w-100 justifyBetween">
                <Text style={{fontWeight: 400}}>Showing 1-{state.showing} of {state.total} results</Text>
                <div className="flex">
                    <div className="flex alignCenter">
                        <Text style={{marginRight: 5}}>Show</Text>
                        <Input
                        onChange={(e) => dispatch(updateSearch({...state, limit: Number(e.target.value)}))}
                        min={8}
                        max={32}
                        step={4} 
                        style={{width: 30, height:30, textAlign: "center"}} 
                        type="number" 
                        placeholder="16"/>
                    </div>
                    <div className="flex alignCenter" style={{marginLeft: 30}}>
                        <Text style={{marginRight: 5}}>SortBy</Text>
                        <SortDropdown onChange={(e) => dispatch(updateSearch({...state, order: e.target.value}))}>
                            <option value="default">Default</option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </SortDropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}