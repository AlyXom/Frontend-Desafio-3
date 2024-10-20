import React from "react";
import { svgPath } from "./IconsBar";
import { Icons, Text } from "../styles/styledComponents";
import "../styles/styles.css"

export default function Badges({icon, title, msg}: {icon: string, title: string, msg: string}) {
    return (
        <div className="flex gap">
            <Icons $height={60} $width={50} src={`${svgPath}/${icon}.svg`}/>
            <div>
                <Text style={{fontSize: 25, fontWeight: 600}}>{title}</Text>
                <Text style={{color: "#898989"}}>{msg}</Text>
            </div>
        </div>
    )
}