import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"

// STYLED COMPONENTS
import {
    BackDiv,
    MainSection,
    LeftSection,
    RightSection,
    Row,
    GreenButton,
    ChartImage,
    MainSectionText
} from "./MainStyles";

// Other Internal Components

// ACTION
import { logout } from "../../actions/auth"

// ICONS
import { FiPlus } from "react-icons/fi";
import { MdOutlineNotStarted } from "react-icons/md";

// OTHERS
import "./Main.css"

const Main = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const tradingviewRef = useRef(null);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    useEffect(() => {
        const script = document.createElement("script");
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
        script.async = true;
        script.innerHTML = `{
            "symbol": "BSE:SENSEX",
            "width": 312,
            "height": 220,
            "locale": "in",
            "dateRange": "1D",
            "colorTheme": "dark",
            "trendLineColor": "rgba(41, 98, 255, 1)",
            "underLineColor": "rgba(41, 98, 255, 0.3)",
            "underLineBottomColor": "rgba(41, 98, 255, 0)",
            "isTransparent": false,
            "autosize": false,
            "largeChartUrl": ""
        }`
        tradingviewRef.current.appendChild(script);
    }, [])

    const logout_user = async (e) => {
        e.preventDefault();
        setLoading(true);
        const status = await dispatch(logout(navigate))
        if (status) {
            // logout_failuer();
        }
        else {
            // logout_success();
        }
        setLoading(false);
    }

    return (
        <>
            <BackDiv>
                <MainSection className="container-fluid">
                    <Row className="row">
                        <LeftSection className="col-lg-6">
                            <MainSectionText>
                                The best way to be profitable in market is to learn from past.
                                <br />
                                Document your trades here!
                            </MainSectionText>
                            {
                                user
                                    ? <GreenButton data-bs-toggle="modal" data-bs-target="#newtrade_modal"><FiPlus /> New Trade</GreenButton>
                                    : <GreenButton data-bs-toggle="modal" data-bs-target="#login_modal"><MdOutlineNotStarted /> Get Started</GreenButton>
                            }

                            <div class="tradingview-widget-container mt-3" ref={tradingviewRef}>
                                <div class="tradingview-widget-container__widget"></div>
                                {/* <div class="tradingview-widget-copyright">
                                    <a href="https://in.tradingview.com/symbols/BSE-SENSEX/" rel="noopener" target="_blank">
                                        <span class="blue-text">SENSEX Quotes</span>
                                    </a> by TradingView
                                </div> */}
                            </div>


                        </LeftSection>

                        <RightSection className="col-lg-6">
                            <ChartImage src="images/chart.png" />
                        </RightSection>

                    </Row>
                </MainSection>
            </BackDiv>

        </>
    )
}

export default Main