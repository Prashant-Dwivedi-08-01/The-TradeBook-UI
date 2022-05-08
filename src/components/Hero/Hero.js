// REACT, REDUX and ROUTER
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"

// STYLED COMPONENTS

// ICONS

// ACTIONS
import { getAllTrades } from "../../actions/trades"

// COMPONENTS
import Info from "../Info/Info"
import Footer from "../Footer/Footer";
import LatestTrades from "../LatestTrades/LatestTrades";
import NewTrade from "../NewTrade/NewTrade";
import Auth from "../Auth/Auth";
import Main from "../Main/Main";

// OTHERS
import 'react-toastify/dist/ReactToastify.css';
import ContentLoader from "react-content-loader";


const Hero = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [allTradeloading, setAllTradeLoading] = useState(false);

    const [allTrades, setAllTrades] = useState([])


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])


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
            <Main/>

            {/* AUTH LOGIN-REGISTER MODAL. BUTTON TO TRIGGER THIS IS PRESENT IN MAIN */}
            <div className="modal fade" id="login_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Auth/>
            </div>

            {/* NEW TRADE MODAL. BUTTON TO TRIGGER THIS IS PRESENT IN MAIN  */}
            <div className="modal fade" id="newtrade_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <NewTrade />
            </div>

            {
                user
                ? (
                        allTradeloading
                            ? (
                                <ContentLoader viewBox="0 0 380 70">
                                <rect x="80" y="17" rx="4" ry="4" width="200" height="10" />
                                <rect x="80" y="30" rx="3" ry="3" width="200" height="10" />
                                <rect x="80" y="43" rx="3" ry="3" width="200" height="10" />
                                <rect x="80" y="56" rx="3" ry="3" width="200" height="10" />
                                <rect x="80" y="69" rx="3" ry="3" width="200" height="10" />
                              </ContentLoader>
        
                            )
                            : (<LatestTrades trades={allTrades}/>)
                    
                )
                :(
                    <Info />
                )
            }
            
            

            <Footer />

        </>
    )
}
export default Hero;