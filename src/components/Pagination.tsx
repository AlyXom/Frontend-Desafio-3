import React, { useState } from "react"
import "../styles/styles.css"

let totalPages = 3

const pages: number[] = []
for(let i = 1; i <= totalPages; i++) {
    pages.push(i)
}

export default function Pagination() {
    const [actualPage, setActualPage] = useState<number>(1)

    function nextPage() {
        if(actualPage >= totalPages) {
            setActualPage(totalPages)
        } else {
            setActualPage(actualPage + 1)
        }
    }

    function prevPage() {
        if(actualPage <= 1) {
            setActualPage(1)
        } else {
            setActualPage(actualPage - 1)
        }
    }

    console.log(actualPage)
    return (
        <div className="flex gap justifyCenter">
            <button onClick={() => prevPage()}>Prev</button>
            {pages.map((item: number) => {
                return (
                    <div style={{backgroundColor: actualPage == item ? "red" : "blue", width: 100, height: 100}}>
                        <p onClick={() => setActualPage(item)}>{item}</p>
                    </div>
                )
            })}
            <button onClick={() => nextPage()}>Next</button>
        </div>
    )
}