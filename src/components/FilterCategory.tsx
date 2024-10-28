import React, { useEffect, useState } from "react";
import { FilterDropdown, Icons, Input, Text } from "../styles/styledComponents";
import { svgPath } from "./IconsBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/styles.css"
import { updateSearch } from "../redux/slices/filterSlice";
import { myApi } from "../axios.config";
import { Category } from "../types/category";

export default function FilterCategory() {

    const state = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()

    const [isCheck, setIsCheck] = useState<{is_new?: boolean, discount?: number, category?: number}>({is_new: false, category: state.category})
    const [categories, setCategories] = useState<Category[]>([])
    const [drop, setDrop] = useState(false)



    useEffect(() => {

        async function getCategories() {
            const response = await myApi.get("categories/")
            if(response) {
                setCategories(response.data)
            }
        }
        getCategories()
    }, [])

    function handleNewConditionChange() {
        setIsCheck({...isCheck, is_new: !isCheck.is_new})
        dispatch(updateSearch({...state, is_new: isCheck.is_new ? undefined : !isCheck.is_new}))
    }

    function handleDiscountChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value)
        setIsCheck({...isCheck, discount: value})
        dispatch(updateSearch({...state, discount: value}))
    }

    function handleCategoryChange(itemId: number) {
        if(isCheck.category == state.category) {
            setIsCheck({...isCheck, category: 0})
            dispatch(updateSearch({...state, category: undefined}))
        } else {
            setIsCheck({...isCheck, category: itemId})
            dispatch(updateSearch({...state, category: itemId}))
        }
    }

    return (
        <div style={{borderRight:"2px solid grey"}}>

            <div className="flex alignCenter gap">

                <div onClick={() => setDrop(!drop)} className="flex alignCenter gap-5p">
                    <Icons 
                    $width={19} 
                    $height={19} 
                    src={`${svgPath}/filter.svg`}/> 
                    <Text style={{fontSize: 18, cursor: "pointer", fontWeight: 400}}>Filter</Text>
                </div>

                <Icons 
                style={{margin: "0px 10px 0px 40px"}} 
                $width={18} 
                $height={18} 
                src={`${svgPath}/dots-menu.svg`}/>
                <Icons 
                style={{marginRight: 20}} $width={18} 
                $height={18} 
                src={`${svgPath}/display.svg`}/>
            </div>

            <FilterDropdown $drop={drop}>
                <div className="flex">
                    <div>
                        <Text>Filter By:</Text>
                        <div>
                            <Text>Conditions:</Text>
                            <div>
                                <div className="flex gap">
                                    <p>New</p>
                                    <input type="checkbox" 
                                    checked={isCheck.is_new} 
                                    onChange={handleNewConditionChange}/>
                                </div>

                                <div className="flex gap">
                                    <p>Discount: </p>
                                    <Input 
                                    onChange={handleDiscountChange} 
                                    style={{width: 30, textAlign: "center"}} 
                                    placeholder="10" 
                                    type="number"/>
                                </div>

                            </div>
                            <Text>Categories:</Text>
                            {categories.map((item) => {
                                return (
                                    <div 
                                    key={item.id} 
                                    className="flex wrap gap">
                                        <p>{item.name}</p>
                                        <input 
                                        checked={isCheck.category == item.id} 
                                        type="checkbox" 
                                        onChange={() => handleCategoryChange(item.id)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </FilterDropdown>
        </div>
    )
}