import React, { useState, useEffect} from "react";
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