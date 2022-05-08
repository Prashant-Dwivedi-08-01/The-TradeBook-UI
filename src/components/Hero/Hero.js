import React, { useState, useEffect } from "react";
import "./Hero.css"
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
    GreenButton,
    ChartImage,
    MainSectionText
} from "./HeroStyles";
import { GiNotebook } from "react-icons/gi"
import { FiPlus } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { MdOutlineNotStarted } from "react-icons/md";
import { logout } from "../../actions/auth"
import { getAllTrades } from "../../actions/trades"
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import Info from "../Info/Info"
import Footer from "../Footer/Footer";
import LatestTrades from "../LatestTrades/LatestTrades";
import NewTrade from "../NewTrade/NewTrade";
import Auth from "../Auth/Auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import ContentLoader, { Facebook } from "react-content-loader";

const Hero = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);
    const [allTradeloading, setAllTradeLoading] = useState(false);

    const [allTrades, setAllTrades] = useState([])


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

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

    const fetch_all_trades_for_this_user = async () => {

        setAllTradeLoading(true)
        const response = await dispatch(getAllTrades())

        if (response["status"]) {
            console.log("Fetched All Trades");
            const data = response['data']
            setAllTrades(data)

        } else {
            console.log("Something is worong");
            console.log(response["message"]);

        }
        setAllTradeLoading(false)
    }

    useEffect(() => {
        if (user) {
            fetch_all_trades_for_this_user()
        }
    }, [])
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
                    {
                        loading
                            ? (
                                <div className="spinner-grow spinner-grow-sm text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ): (
                                user
                                    ? (
                                        <>
                                            <div className="dropdown" style={{ backgroundColor: "#22384b" }}>
                                                <LoginButton style={{ backgroundColor: "#22384b" }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <BiUser size={"1.5rem"} style={{ marginRight: "1rem" }} /> {user["user_details"]["email"]}
                                                </LoginButton>

                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            <span onClick={logout_user}>
                                                                Log Out
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </>
                                    )
                                    : (
                                        <LoginButton data-bs-toggle="modal" data-bs-target="#login_modal">
                                            Log In
                                        </LoginButton>
                                    )
                            )
                    }

                </NavBar>
                <MainSection className="container-fluid">
                    <Row className="row">
                        <LeftSection className="col-6">
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

                        </LeftSection>

                        <RightSection className="col-6">
                            <ChartImage src="images/chart.png" />
                        </RightSection>

                    </Row>
                </MainSection>
            </BackDiv>

            {/* AUTH LOGIN-REGISTER MODAL */}
            <div className="modal fade" id="login_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Auth/>
            </div>

            {/* NEW TRADE MODAL */}
            <div className="modal fade" id="newtrade_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <NewTrade />
            </div>

            <Info />
            
            {
                allTradeloading
                    ? (
                        <div className="container-fluid text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>

                    )
                    : <LatestTrades trades={allTrades} />
            }

            <Footer />

        </>
    )
}
export default Hero;