import React, { useState, useEffect } from "react";
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
import { login, logout } from "../../actions/auth"
import { useDispatch } from "react-redux";
import { useNavigate , useLocation } from "react-router-dom"

const Hero = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const initialFormData = {
        "email": '',
        "password": ''
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [formData, setFormData] = useState(initialFormData)
    const [errorMessage, setErrorMessage] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const logout_user = async(e) => {
        const status = await dispatch(logout(navigate))
        if (status) {
            alert(status.message);
        }
        else {

            alert("Logged Out Successfully");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const status = await dispatch(login(formData, navigate))
        // status is obtained when we have some error in login
        if (status) {
            setErrorMessage(status["message"])
            setShowErrorMessage(true)
            setFormData(initialFormData)
        }
        else {
            setErrorMessage("")
            setShowErrorMessage(false);
            setFormData(initialFormData)
            document.getElementById("loginModal").click()
        }
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
                        user
                            ? (
                            <LoginButton onClick={logout_user}>
                                Log Out
                            </LoginButton>
                            )
                            : (
                            <LoginButton data-bs-toggle="modal" data-bs-target="#login_modal">
                                Log In
                            </LoginButton>
                            )
                    }



                </NavBar>
                <MainSection className="container-fluid">
                    <Row className="row">
                        <LeftSection className="col-6">
                            <MainSectionText>
                                The best way to be profitable in market is to learn from past.
                                <br />
                                Document your trades here.
                            </MainSectionText>
                            <GreenButton>
                                <FiPlus /> New Trade
                            </GreenButton>
                        </LeftSection>

                        <RightSection className="col-6">
                            <ChartImage src="images/chart.png" />
                        </RightSection>

                    </Row>
                </MainSection>
            </BackDiv>

            <button type="button" id="loginModal" style={{ display: "none" }} data-bs-dismiss="modal" data-bs-target="#login_modal" aria-label="Close"></button>
            <div class="modal fade" id="login_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style={{ maxWidth: "414px" }}>
                    <div class="modal-content" style={{ borderRadius: "0.5rem" }}>
                        <div class="modal-header" style={{
                            border: "none",
                            borderTop: "11px solid #1cff95"
                        }}>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-header" style={{
                            justifyContent: "center",
                            padding: 0,
                            border: "none"
                        }}>
                            <h5 class="modal-title" id="exampleModalLabel">Sign In To</h5>
                        </div>
                        <div class="modal-header" style={{
                            justifyContent: "center",
                            padding: 0,
                            border: "none"
                        }}>
                            <h4 class="modal-title" id="exampleModalLabel">
                                <GiNotebook size="2rem" color="black" style={{ marginRight: "1rem" }} />The TradeBook</h4>
                        </div>


                        <form onSubmit={handleSubmit}>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <input type="email" onChange={handleChange} value={formData['email']} class="form-control" name="email" placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" onChange={handleChange} value={formData['password']} class="form-control" name="password" placeholder="Password" />
                                </div>

                                {
                                    showErrorMessage
                                        ? (
                                            <span style={{ display: "flex", justifyContent: "center", color: 'red', fontSize: "1rem" }}>
                                                {errorMessage}
                                            </span>
                                        )
                                        : (<></>)
                                }


                                <span style={{ display: "flex", justifyContent: "center", fontSize: "1rem" }}>
                                    Already have an account<a style={{ color: "#8d96eb", cursor: "pointer" }}>? Login</a>
                                </span>
                            </div>
                            <div class="modal-footer" style={{ justifyContent: "center" }}>
                                <GreenButton type="submit">
                                    Login
                                </GreenButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Hero;