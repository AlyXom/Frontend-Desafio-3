import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import { ModalProps } from "../types/modal";
import { Card, CloseModal, HorizontalCard, Icons, ModalContainer, ModalOverlay, Price, Text } from "../styles/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { switchState } from "../redux/slices/modalState";
import { svgPath } from "./IconsBar";
import { deleteToCart, deleteToHeart } from "../redux/slices/heartAndCart.slice";
import { useNavigate } from "react-router-dom";

export default function Modal({content, isOpen, headerText}:ModalProps) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.modalstate)

    const [isVisible, setIsVisible] = useState(true)
    return (
        <ModalOverlay>
            <ModalContainer $isOpen={isOpen} $onClose={isVisible}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Text style={{marginLeft: 5}}>{headerText}</Text>
                <CloseModal style={{marginTop: 5}} onClick={() => {
                    setIsVisible(false)
                    if(state.heart == true) {
                    setTimeout(() => dispatch(switchState({...state, heart: !state.heart})), 50)
                    } else if(state.cart == true) {
                    setTimeout(() => dispatch(switchState({...state, cart: !state.cart})), 50)
                    }
                }}><Icons src={`${svgPath}/cross.svg`} $height={30} $width={30}/>
                </CloseModal>
                </div>
                <hr  style={{marginBottom: 10}}/>
                <Card>
                {content?.map((item) => {
                    return (
                        <div key={item.id}>
                            <HorizontalCard>
                            <img onClick={() => navigate(`/singleproduct/${item.id}`)} style={{width: 100, height: 100, cursor: "pointer"}} src={`http://${item.image_link}`} alt="" />
                            <div style={{width: "100%"}}>
                                <Text onClick={() => navigate(`/singleproduct/${item.id}`)} style={{cursor: "pointer"}}>{item.name}</Text>
                                {state.heart == true ? <Text style={{fontSize: 14, marginBottom: 20}}>{item.description}</Text> : <div style={{marginBottom: 20}}></div>}
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <div>
                                        {state.cart == true ? <Text style={{fontSize: 14}}>qty: {item.quantity}</Text> : undefined}
                                        <Price>{`R$ ${item.price}`}</Price>
                                    </div>
                                    {state.heart == true ? <Icons onClick={() => dispatch(deleteToHeart(item.id))} src={`${svgPath}/trash.svg`} alt="" $height={23} $width={23}/> : undefined}
                                    {state.cart == true ? <Icons onClick={() => dispatch(deleteToCart(item.id))} src={`${svgPath}/trash.svg`} alt="" $height={23} $width={23}/> : undefined}
                                </div>
                            </div>
                            </HorizontalCard>
                            <hr />
                        </div>
                    )
                })}
                </Card>
            </ModalContainer> 
        </ModalOverlay>
    )
}