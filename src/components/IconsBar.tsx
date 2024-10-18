import React, { useState } from "react";
import { HeaderIcons } from "../styles/styledComponents";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Modal from "./Modal";
import { switchState } from "../redux/slices/modalState";

export const svgPath = "http://localhost:3000/icons"

export default function IconsBar() {

    const dispatch = useDispatch()
    const {heart, cart} = useSelector((state: RootState) => state.heartandcart)
    const state = useSelector((state: RootState) => state.modalstate)
    return (
        <div style={{width: "10%"}}>
            {state.heart == true ? <Modal content={heart} isOpen={state.heart} headerText="Your Liked Items"/> : undefined}
            {state.cart == true ? <Modal content={cart} isOpen={state.cart} headerText="Your Shopping Cart"/> : undefined}

            <div style={{display: "flex", justifyContent: "space-between"}}>
            <HeaderIcons src={`${svgPath}/user.svg`} alt="" />

            <div>
                <HeaderIcons src={`${svgPath}/search.svg`} alt="" />
            </div>

            <div style={{display: "flex", gap: 5}}>
                <HeaderIcons onClick={() => { dispatch(switchState({...state, heart: !state.heart}))}} src={`${svgPath}/heart.svg`} alt="" />
                <p style={{fontSize: 13, cursor: "default"}}>{heart?.length}</p>
            </div>

            <div style={{display: "flex", gap: 5}}>
                <HeaderIcons onClick={() => { dispatch(switchState({...state, cart: !state.cart}))}} src={`${svgPath}/cart.svg`} alt="" />
                <p style={{fontSize: 13, cursor: "default"}}>{cart?.length}</p>
            </div>
            </div>
        </div>
    )
}