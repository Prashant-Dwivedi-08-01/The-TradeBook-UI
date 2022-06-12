import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

// styled components
import {
    ImgContainer,
    ChartImage,
    InfoTitle,
    SeeFullImage,
    Box
} from "./TradeDetailsStyles"

// components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

//actions
import { individualTradeDataAction } from "../../actions/trades";

// OTHERS
import ContentLoader from "react-content-loader";

const TradeDetails = () => {

    const { script } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [tradeData, setTradeData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isProfit, setIsProfit] = useState(null);
    const [isError, setIsError] = useState(false);


    const fetchCurrentTradeData = async () => {
        setIsLoading(true);
        const response = await dispatch(individualTradeDataAction(script, navigate));
        if (response["status"]) {
            setTradeData(response['data']);
            const profit = response['data']['total_money_exit'] - response['data']['total_money_invest']
            if (profit > 0)
                setIsProfit(true)
            else
                setIsProfit(false)
            
            setIsError(false)
        } else {
            setIsError(true)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCurrentTradeData();
    }, [location])

    return (
        <>
            <NavBar />

            {
                !isError
                ?(
                    <>
                        <InfoTitle>Trade Details</InfoTitle>

                        {
                            isLoading
                                ? (
                                    <ContentLoader viewBox="0 0 380 380">
                                        <rect x="30" y="17" rx="4" ry="4" width="150" height="10" />
                                        <rect x="30" y="30" rx="3" ry="3" width="120" height="10" />
                                        <rect x="30" y="45" rx="3" ry="3" width="130" height="10" />
                                        <rect x="30" y="60" rx="3" ry="3" width="100" height="10" />
                                        <rect x="30" y="75" rx="3" ry="3" width="80" height="10" />
                                        <rect x="30" y="90" rx="3" ry="3" width="120" height="10" />
                                        <rect x="190" y="14" rx="3" ry="3" width="150" height="100" />
                                    </ContentLoader>
                                )
                                : (
                                    <div className="container mt-5">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mt-3">
                                                    <h4 style={{ display: "inline", fontWeight: "bold" }}>Script: </h4>
                                                    <h4 style={{ display: "inline" }}>{script}</h4>
                                                </div>
                                                <div className="mt-3">
                                                    <h4 style={{ display: "inline", fontWeight: "bold" }}>Total Open Quantity: </h4>
                                                    <h4 style={{ display: "inline" }}>{tradeData["total_qty"]}</h4>
                                                </div>
                                                <div className="mt-3">
                                                    <h4 style={{ display: "inline", fontWeight: "bold" }}>Status: </h4>
                                                    {
                                                        (tradeData["status"] == "close")
                                                            ? (
                                                                <h5 style={{ display: "inline" }}><span class="badge bg-secondary">&#x292B; {tradeData["status"]}</span></h5>
                                                            )
                                                            : (
                                                                <h5 style={{ display: "inline" }}><span class="badge bg-info">&#x2299; {tradeData["status"]}</span></h5>
                                                            )
                                                    }

                                                </div>
                                                {
                                                    isProfit
                                                        ? (
                                                            <>
                                                                <div className="mt-3 d-flex justify-content-center">
                                                                    <img src="/images/profit.png" style={{ width: "40%" }} />
                                                                </div>

                                                                <div className="mt-3 d-flex justify-content-center">
                                                                    <h5><span class="badge bg-success">Profit</span></h5>
                                                                </div>
                                                            </>
                                                        )
                                                        : (
                                                            <>
                                                                <div className="mt-3 d-flex justify-content-center">
                                                                    <img src="/images/loss.png" style={{ width: "40%" }} />
                                                                </div>

                                                                <div className="mt-3 d-flex justify-content-center">
                                                                    {/* <h5><span class="badge bg-success">Profit</span></h5> */}
                                                                    <h5><span class="badge bg-danger">Loss</span></h5>
                                                                </div>
                                                            </>
                                                        )
                                                }


                                            </div>
                                            <div className="col-lg-6 mt-2">
                                                <ImgContainer>
                                                    <ChartImage src={tradeData["chart_url"]} onerror="this.onerror=null; this.src='/images/warning.png'" />
                                                </ImgContainer>
                                                <SeeFullImage href={tradeData["chart_url"]} target="_blank">
                                                    See Full Image
                                                </SeeFullImage>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="col-lg-6">
                                                <h4 style={{ textAlign: "center" }}> <span class="badge bg-primary">Entries</span> </h4>
                                                <table class="table table-success">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            tradeData["entries"].map((entry) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{entry[0]}</td>
                                                                        <td>{entry[1]}</td>
                                                                        <td>{entry[2]}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                            <div className="col-lg-6">
                                                <h4 style={{ textAlign: "center" }}> <span class="badge bg-primary">Exits</span> </h4>
                                                <table class="table table-danger">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            tradeData["exits"].map((exit) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{exit[0]}</td>
                                                                        <td>{exit[1]}</td>
                                                                        <td>{exit[2]}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                        <div className="row mt-5">
                                            <div className="col-lg-12">
                                                <h4 style={{ textAlign: "center", fontWeight: "bolder" }}>Remarks</h4>
                                            </div>
                                            {
                                                tradeData["notes"].map((note) => {
                                                    let end_idx = note.indexOf("]")
                                                    let isBuy = note.slice(1,4)
                                                    return(
                                                        <div className="col-lg-12 mt-3">
                                                            <h4><span class={(isBuy == "Buy")?"badge bg-success":"badge bg-danger"}>{note.slice(1,end_idx)}</span></h4>
                                                            <Box>
                                                                {note.slice(end_idx+1)}
                                                            </Box>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                        }

                    </>
                )
                :(
                    <>
                        <div style={{textAlign: "center"}}>
                            <img src="/images/warning.png" style={{width: "32%"}} />
                            <h5>No Trade details for script <b>{script}</b></h5>
                        </div>
                    </>
                )
            }
            <Footer/>
        </>
    )
}

export default TradeDetails