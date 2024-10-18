import React from "react";
import { BannerContainer, PastelCard, Text } from "../styles/styledComponents";

export default function Banner() {
    return (
        <BannerContainer>
            <PastelCard style={{backgroundColor: "#FFF3E3"}}>
                <Text style={{marginTop: 40, marginLeft: 10}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit repellat itaque omnis obcaecati repudiandae vitae reiciendis sapiente dolorem quisquam odit cumque rem, exercitationem fuga ducimus accusamus et amet dolore expedita.</Text>
            </PastelCard>
        </BannerContainer>
    )
}