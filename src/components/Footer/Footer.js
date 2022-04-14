import React from "react"
import { FooterDiv } from "./FooterStyles"


const Footer = ()=>{
    const d = new Date();
    let year = d.getUTCFullYear(); 
    return(
        <>
            <FooterDiv>
                The TradeBook Copyright &#169; 2021 - {year}
            </FooterDiv>
        </>
    )
}
export default Footer;