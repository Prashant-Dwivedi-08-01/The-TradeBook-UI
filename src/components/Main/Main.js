import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"

// STYLED COMPONENTS
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
} from "./MainStyles";

// ACTION
import { logout } from "../../actions/auth"

// ICONS
import { GiNotebook } from "react-icons/gi"
import { FiPlus } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { MdOutlineNotStarted } from "react-icons/md";

// OTHERS
import "./Main.css"

const Main = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);

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

        </>
    )
}

export default Main