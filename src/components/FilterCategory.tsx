import React from "react";
import { FilterModal, Icons, Text } from "../styles/styledComponents";
import { svgPath } from "./IconsBar";

export default function FilterCategory() {
    return (
        <div style={{borderRight:"2px solid grey"}}>
            <div className="flex alignCenter gap">
                <div className="flex alignCenter gap-5p">
                    <Icons $width={19} $height={19} src={`${svgPath}/filter.svg`}/> 
                    <Text style={{fontSize: 18, cursor: "pointer", fontWeight: 400}}>Filter</Text>
                </div>
                <Icons style={{margin: "0px 10px 0px 40px"}} $width={18} $height={18} src={`${svgPath}/dots-menu.svg`}/>
                <Icons style={{marginRight: 20}} $width={18} $height={18} src={`${svgPath}/display.svg`}/>
            </div>
            <FilterModal>
                <p>Olá</p>
            </FilterModal>
        </div>
    )
}