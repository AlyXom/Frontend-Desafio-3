import React, { useState } from "react";
import { svgPath } from "./IconsBar";

const values = [3, 3.5, 4, 4.5, 5]
export default function Stars() {
    let starsElement = []
    const [stars, setStars] = useState<number>(() => values[Math.floor(Math.random() * values.length)])
    for(let i = 1; i <= stars; i++) {
        if(stars - i == 0.5) {
            starsElement.push(<img key={i} src={`${svgPath}/half-star.svg`}/>)
        } else {
            starsElement.push(<img key={i} src={`${svgPath}/star.svg`}/>)
        }
    }

    return (
        <div style={{borderRight: "1px grey solid", minWidth: 100, maxWidth: 120}}>
            {starsElement.map(item => item)}
        </div>
    )
}