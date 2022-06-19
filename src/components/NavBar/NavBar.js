import { React, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom"

// STYLED COMPONENTS
import {
    BackDiv,
    Nav,
    Name,
    TitleLogo,
    Slogan,
    LoginButton,
    NavOptions,
    Option,
    NavLink
} from "./NavBarStyles";

// ACTION
import { logout } from "../../actions/auth"

// ICONS
import { GiNotebook } from "react-icons/gi"
import { BiUser } from "react-icons/bi";

const NavBar = () => {

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

    return(
        <>
            <Nav style={{backgroundColor: "#002024"}}>
                    <TitleLogo onClick={() => window.location.href="/"}>
                        <GiNotebook size="3rem" color="white" style={{ marginRight: "1rem" }} />
                        <Name>
                            TradeBook
                        </Name>
                        <Slogan>
                            New way to document your trades
                        </Slogan>
                    </TitleLogo>
                    <NavOptions>
                        <Option>
                            <NavLink href="/#">Trade</NavLink>
                        </Option>
                        <Option>
                            <NavLink href="/market">Market</NavLink>
                        </Option>
                        <Option>
                            <NavLink href="/#">New</NavLink>
                        </Option>
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

                </Nav>
        </>
    )
}

export default NavBar