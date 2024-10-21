import React from "react";
import { Input, SortDropdown, Text } from "../styles/styledComponents";
import "../styles/styles.css"

export default function SortBy() {
    return (
        <div className="flex w-100" style={{marginLeft: 30}}>
            <div className="flex w-100 justifyBetween">
                <Text style={{fontWeight: 400}}>Showing 1-16 of 32 results</Text>
                <div className="flex">
                    <div className="flex alignCenter">
                        <Text style={{marginRight: 5}}>Show</Text>
                        <Input min={4} max={32} maxLength={2} step={4} style={{width: 30, height:30, textAlign: "center"}} type="number" placeholder="16"/>
                    </div>
                    <div className="flex alignCenter" style={{marginLeft: 30}}>
                        <Text style={{marginRight: 5}}>SortBy</Text>
                        <SortDropdown>
                            <option value="default">Default</option>
                            <option value="asc">A-Z</option>
                            <option value="asc">Z-A</option>
                        </SortDropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}