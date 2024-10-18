import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import { ModalProps } from "../types/modal";
import { ModalContainer, ModalOverlay } from "../styles/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { switchState } from "../redux/slices/modalState";

export default function Modal({content, isOpen}:ModalProps) {

    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.modalstate)

    const [isVisible, setIsVisible] = useState(true)
    return (
        <ModalOverlay>
            <ModalContainer $isOpen={isOpen} $onClose={isVisible}>
                <button onClick={() => {
                    setIsVisible(false)
                    if(state.heart == true) {
                    setTimeout(() => dispatch(switchState({...state, heart: !state.heart})), 50)
                    } else if(state.cart == true) {
                    setTimeout(() => dispatch(switchState({...state, cart: !state.cart})), 50)
                }
                }}>X</button>
                {content?.map((item) => {
                    return (
                        <p>{item.name}</p>
                    )
                })}
            </ModalContainer> 
        </ModalOverlay>
    )
}