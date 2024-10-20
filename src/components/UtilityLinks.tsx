import React, { SyntheticEvent, useEffect, useState } from "react";
import { Container, NavText, NewsletterButton, NewsletterInput, Text, ValidationText } from "../styles/styledComponents";
import { useNavigate } from "react-router-dom";

export default function UtilityLinks() {
    const navigate = useNavigate()
    const [input, setInput] = useState("")
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined)
    const [msg, setMsg] = useState("E-mail Válido")
    const [subscribe, setSubscribe] = useState<boolean>(true)
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    useEffect(() => {
        if(regex.test(input)) {
            setIsValid(true)
            setSubscribe(false)
        } else if(input == "") {
            setSubscribe(true)
            setIsValid(undefined)
            setMsg("E-mail válido")
        } else {
            setIsValid(false)
        }
    }, [input])

    function submmit(event: SyntheticEvent) {
        event.preventDefault()
        setMsg("E-mail Cadastrado")
    }
    return (
        <Container className="flex" style={{justifyContent: "space-between", width: "50%"}}>
            <div>
                <Text style={{color: "#9F9F9F"}}>Links</Text>
                <div className="mTop-50p">
                    <NavText onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className="mTop-50p">Home</NavText>
                    <NavText onClick={() => navigate("/shop")} className="mTop-50p">Shop</NavText>
                    <NavText className="mTop-50p">About</NavText>
                    <NavText className="mTop-50p">Contact</NavText>
                </div>
            </div>
            <div>
                <Text style={{color: "#9F9F9F"}}>Help</Text>
                <div className="mTop-50p">
                    <NavText className="mTop-50p">Payment Options</NavText>
                    <NavText className="mTop-50p">Returns</NavText>
                    <NavText className="mTop-50p">Privacy Policies</NavText>
                </div>
            </div>
            <div>
                <Text style={{color: "#9F9F9F"}}>Newsletter</Text>
                <div className="mTop-50p">
                    <form onSubmit={submmit}>
                        <NewsletterInput onChange={(e) => setInput(e.target.value)} $valid={isValid} placeholder="Enter Your Email Address"/>
                        <NewsletterButton disabled={subscribe}>SUBSCRIBE</NewsletterButton>
                    </form>
                    {isValid == true ? <ValidationText $color={isValid}>{msg}</ValidationText> : 
                    isValid == false ? <ValidationText $color={isValid}>E-mail Inválido</ValidationText> : undefined}
                </div>
            </div>
        </Container>
    )
}