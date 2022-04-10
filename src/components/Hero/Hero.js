import React from "react";
import {
    BackDiv,
    NavBar,
    Name,
    TitleLogo,
    Slogan,
    LoginButton,
    NavOptions,
    Option,
    MainSection,
    LeftSection,
    RightSection,
    Row,
    NewTradeButton,
    ChartImage,
    MainSectionText
} from "./HeroStyles";
import { GiNotebook } from "react-icons/gi"
import { FiPlus } from "react-icons/fi"

const Hero = () => {
    return (
        <>
            <BackDiv>
                <NavBar>
                    <TitleLogo>
                        <GiNotebook size="3rem" color="white" style={{ marginRight: "1rem" }} />
                        <Name>
                            TradeBook
                        </Name>
                        <Slogan>
                            New to document your trades
                        </Slogan>
                    </TitleLogo>
                    <NavOptions>
                        <Option>Trades</Option>
                        <Option>Market</Option>
                        <Option>News</Option>
                    </NavOptions>
                    <LoginButton>
                        Log In
                    </LoginButton>
                </NavBar>
                <MainSection className = "container-fluid">
                    <Row className = "row">
                        <LeftSection className = "col-6">
                            <MainSectionText>
                                The best way to be profitable in market is to learn from past.
                                <br/>
                                Document your trades here.
                            </MainSectionText>
                            <NewTradeButton>
                                <FiPlus/> New Trade
                            </NewTradeButton>
                        </LeftSection>

                        <RightSection className = "col-6">
                            <ChartImage src="images/chart.png"/>
                        </RightSection>

                    </Row>
                </MainSection>
            </BackDiv>
        </>
    )
}
export default Hero;