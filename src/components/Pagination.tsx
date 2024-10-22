import React, { useState } from "react"
import "../styles/styles.css"
import { PageButton, SelectedPage } from "../styles/styledComponents"

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
        <div className="flex gap justifyCenter" style={{marginBottom: 80}}>
            <PageButton onClick={() => prevPage()}>Prev</PageButton>
            {pages.map((item: number) => {
                return (
                    <div>
                        <SelectedPage $actual={actualPage} $clicked={item} onClick={() => setActualPage(item)}>{item}</SelectedPage>
                    </div>
                )
            })}
            <PageButton onClick={() => nextPage()}>Next</PageButton>
        </div>
    )
}