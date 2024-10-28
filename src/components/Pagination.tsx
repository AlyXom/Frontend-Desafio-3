import React, { useEffect, useState } from "react"
import "../styles/styles.css"
import { PageButton, SelectedPage } from "../styles/styledComponents"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { updateSearch } from "../redux/slices/filterSlice"



export default function Pagination() {
    
    const [actualPage, setActualPage] = useState<number>(1)
    const state = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()
    const totalPage = state.totalPages || 1
    const pages: number[] = []

    useEffect(() => {
        setActualPage(1)
        dispatch(updateSearch({...state, currentPage: 1}))
    }, [state.limit, state.category, state.is_new, state.discount])

    for(let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }

    function nextPage() {
        if(actualPage < totalPage) {
            const newPage = actualPage + 1
            setActualPage(newPage)
            dispatch(updateSearch({...state, currentPage: newPage}))
            window.scrollTo(0,0)
        }
    }

    function prevPage() {
        if(actualPage > 1) {
            const newPage = actualPage - 1
            setActualPage(newPage)
            dispatch(updateSearch({...state, currentPage: newPage}))
            window.scrollTo(0,0)
        }
    }

    function choosePage(item: number) {
        setActualPage(item)
        dispatch(updateSearch({...state, currentPage: item}))
        window.scrollTo(0,0)
    }

    return (
        <div className="flex gap justifyCenter" style={{marginBottom: 80}}>
            <PageButton onClick={() => prevPage()}>Prev</PageButton>
            {pages.map((item: number) => {
                return (
                    <div key={item}>
                        <SelectedPage $actual={actualPage} $clicked={item} onClick={() => choosePage(item)}>{item}</SelectedPage>
                    </div>
                )
            })}
            <PageButton onClick={() => nextPage()}>Next</PageButton>
        </div>
    )
}