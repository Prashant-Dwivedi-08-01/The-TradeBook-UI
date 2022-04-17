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
import { BiUser } from "react-icons/bi";
import { MdOutlineNotStarted } from "react-icons/md";
import { login, logout, register } from "../../actions/auth"
import {  getAllTrades } from "../../actions/trades"
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"
import Info from "../Info/Info"
import Footer from "../Footer/Footer";
import LatestTrades from "../LatestTrades/LatestTrades"
// import ContentLoader, { Facebook } from "react-content-loader";

const Hero = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    const initialLoginFormData = {
        "email": '',
        "password": ''
    }
    const initialRegisterFormData = {
        "first_name": "",
        "last_name": "",
        "phone": "",
        "email": '',
        "password": ''
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [formLoginData, setFormLoginData] = useState(initialLoginFormData)
    const [formRegisterData, setFormRegisterData] = useState(initialRegisterFormData)
    const [errorMessage, setErrorMessage] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const handleLoginChange = (e) => {
        setFormLoginData({ ...formLoginData, [e.target.name]: e.target.value });
    }
    const handleRegisterChange = (e) => {
        setFormRegisterData({ ...formRegisterData, [e.target.name]: e.target.value });
    }
    const handelLoginToggle = () => {
        setIsLogin(!isLogin);
    }

    const logout_user = async (e) => {
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
        setLoading(true)
        if (isLogin) {
            const status = await dispatch(login(formLoginData, navigate))
            // status is obtained when we have some error in login
            if (status) {
                setErrorMessage(status["message"])
                setShowErrorMessage(true)
                setFormLoginData(initialLoginFormData)
            }
            else {
                setErrorMessage("");
                setShowErrorMessage(false);
                setFormLoginData(initialLoginFormData)
                document.getElementById("loginModal").click()
            }

        } else {
            const status = await dispatch(register(formRegisterData, navigate))
            if (status) {
                setErrorMessage(status["message"]);
                setShowErrorMessage(true);
                setFormRegisterData(initialRegisterFormData);

            } else {
                setErrorMessage("");
                setShowErrorMessage(false);
                setFormRegisterData(initialRegisterFormData)
                document.getElementById("loginModal").click()
            }
        }
        setLoading(false)
    }

    const fetch_all_trades_for_this_user = async() =>{
        const status = await dispatch(getAllTrades())
        if(status){
            console.log("Something is worong");
            console.log(status["message"]);

        }else{
            console.log("Very Good")
        }
    }

    if(user){
        fetch_all_trades_for_this_user()
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
                                <>
                                    <div class="dropdown">
                                        <LoginButton class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <BiUser size={"1.5rem"} style ={{marginRight: "1rem"}}/> {user["user_details"]["email"]}
                                        </LoginButton>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">
                                                <a onClick={logout_user}>
                                                    Log Out
                                                </a>
                                            </a></li>
                                        </ul>
                                    </div>

                                </>
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
                                Document your trades here!
                            </MainSectionText>
                            {
                                user
                                ? <GreenButton><FiPlus /> New Trade</GreenButton>
                                : <GreenButton data-bs-toggle="modal" data-bs-target="#login_modal"><MdOutlineNotStarted /> Get Started</GreenButton>
                            }

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
                            <h5 class="modal-title" id="exampleModalLabel">
                                {
                                    isLogin
                                        ? "Sign In To"
                                        : "Register on"
                                }
                            </h5>
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
                                {
                                    isLogin
                                        ? (
                                            <div>
                                                <div class="mb-3">
                                                    <input type="email" onChange={handleLoginChange} value={formLoginData['email']} class="form-control" name="email" placeholder="Email" />
                                                </div>
                                                <div class="mb-3">
                                                    <input type="password" onChange={handleLoginChange} value={formLoginData['password']} class="form-control" name="password" placeholder="Password" />
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div>
                                                <div class="mb-3">
                                                    <input type="text" onChange={handleRegisterChange} value={formRegisterData['first_name']} class="form-control" name="first_name" placeholder="First Name" />
                                                </div>
                                                <div class="mb-3">
                                                    <input type="text" onChange={handleRegisterChange} value={formRegisterData['last_name']} class="form-control" name="last_name" placeholder="Last Name" />
                                                </div>
                                                <div class="mb-3">
                                                    <input type="email" onChange={handleRegisterChange} value={formRegisterData['email']} class="form-control" name="email" placeholder="Email" />
                                                </div>
                                                <div class="mb-3">
                                                    <input type="text" onChange={handleRegisterChange} value={formRegisterData['phone']} class="form-control" name="phone" placeholder="Phone" />
                                                </div>
                                                <div class="mb-3">
                                                    <input type="password" onChange={handleRegisterChange} value={formRegisterData['password']} class="form-control" name="password" placeholder="Password" />
                                                </div>
                                                <div class="mb-3">
                                                    <input type="text" onChange={handleRegisterChange} value={formRegisterData['c_password']} class="form-control" name="c_password" placeholder="Confirm Password" />
                                                </div>
                                            </div>
                                        )
                                }


                                {
                                    showErrorMessage
                                        ? (
                                            <span style={{ display: "flex", justifyContent: "center", color: 'red', fontSize: "1rem" }}>
                                                {errorMessage}
                                            </span>
                                        )
                                        : (<></>)
                                }

                                {
                                    isLogin
                                        ? (
                                            <span style={{ display: "flex", justifyContent: "center", fontSize: "1rem" }}>
                                                Don't have an account<a style={{ color: "#8d96eb", cursor: "pointer" }} onClick={handelLoginToggle}>? Register</a>
                                            </span>
                                        )
                                        : (
                                            <span style={{ display: "flex", justifyContent: "center", fontSize: "1rem" }}>
                                                Already have an account<a style={{ color: "#8d96eb", cursor: "pointer" }} onClick={handelLoginToggle}>? Sign In</a>
                                            </span>
                                        )
                                }

                            </div>
                            <div class="modal-footer" style={{ justifyContent: "center" }}>
                                <GreenButton type="submit">
                                    {
                                        loading
                                            ? (
                                                <div class="spinner-grow spinner-grow-sm text-success" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            )
                                            : (
                                                isLogin
                                                    ? "Login"
                                                    : "Register"
                                            )
                                    }
                                </GreenButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Info />

            <LatestTrades/>

            <Footer />

        </>
    )
}
export default Hero;